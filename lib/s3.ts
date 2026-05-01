import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

export const s3Client = new S3Client({
  region: process.env.S3_REGION || "us-east-1",
  endpoint: process.env.S3_ENDPOINT, // Support for custom S3 providers
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
  },
});

export async function processAndUpload(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}.webp`;
  const key = `uploads/${filename}`;

  // Advanced Anti-Blur & High-Definition Pipeline
  const optimizedBuffer = await sharp(buffer)
    // 1. Resizing with Lanczos3 kernel for maximum sharpness
    .resize(1200, null, { 
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3 
    })
    
    // 2. REDUCE BLUR: The Sharpening Filter
    .sharpen({
      sigma: 1.2, // Increases edge definition
      m1: 1.0,    // Sharpening strength
      m2: 2.0     // Prevents sharpening artifacts on edges
    })

    // 3. ENHANCE CLARITY: CLAHE
    // Boosts local contrast to make details pop
    .clahe({
      width: 3, 
      height: 3
    })

    // 4. COLOR NORMALIZATION
    .normalize()

    // 5. Final Output to WebP
    .webp({ 
      quality: 85,  // High quality to preserve new crispness
      effort: 6,
      smartSubsample: true // Prevents color bleeding on sharp edges
    })
    .toBuffer();

  // Upload to S3
  await s3Client.send(new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: optimizedBuffer,
    ContentType: "image/webp",
  }));

  // Return the Proxy URL
  return `${process.env.NEXT_PUBLIC_BASE_URL}/api/images/${key}`;
}

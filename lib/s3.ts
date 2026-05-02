import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

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
  const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const key = `uploads/${filename}`;

  // Upload original file directly without any processing
  await s3Client.send(new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: file.type, // Use original file type
  }));

  // Return the Proxy URL
  return `${process.env.NEXT_PUBLIC_BASE_URL}/api/images/${key}`;
}

export async function deleteFromS3(url: string) {
  try {
    // Extract key from proxy URL: .../api/images/uploads/filename
    const key = url.split("/api/images/")[1];
    
    if (!key) {
      console.warn("Could not extract S3 key from URL:", url);
      return;
    }

    await s3Client.send(new DeleteObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
    }));
    
    console.log("Successfully deleted from S3:", key);
  } catch (error) {
    console.error("S3 deletion error:", error);
    // We don't throw here to avoid blocking the DB deletion if S3 fails
  }
}

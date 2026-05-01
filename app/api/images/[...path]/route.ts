import { s3Client } from "@/lib/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const key = path.join("/");

  try {
    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
    });

    const response = await s3Client.send(command);

    if (!response.Body) {
      throw new Error("No body in response");
    }

    // Convert S3 stream to a web-supported Response
    // response.Body is a SDK Stream, we need to convert it to a ReadableStream or Buffer
    const data = await response.Body.transformToByteArray();

    return new Response(Buffer.from(data), {
      headers: {
        "Content-Type": response.ContentType || "image/webp",
        // Aggressive caching (1 year)
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Image proxy error:", error);
    return new Response("Image not found", { status: 404 });
  }
}

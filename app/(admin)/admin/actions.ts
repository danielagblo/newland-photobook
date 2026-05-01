"use server";

import { processAndUpload } from "@/lib/s3";
import { revalidatePath } from "next/cache";

export async function uploadGalleryImage(formData: FormData) {
  try {
    const files = formData.getAll("images") as File[];
    const imageUrls: string[] = [];

    for (const file of files) {
      if (file.size > 0) {
        const url = await processAndUpload(file);
        imageUrls.push(url);
      }
    }

    // IMPORTANT: In a real app, you would save these URLs to your DB here
    // e.g., await prisma.galleryImage.createMany({ data: imageUrls.map(url => ({ url })) })
    
    console.log("Successfully uploaded to S3:", imageUrls);
    
    revalidatePath("/gallery");
    return { success: true, urls: imageUrls };
  } catch (error) {
    console.error("Upload action error:", error);
    return { success: false, error: "Failed to upload images" };
  }
}

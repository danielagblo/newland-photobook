"use server";

import { processAndUpload } from "@/lib/s3";
import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import GalleryImage from "@/lib/models/GalleryImage";
import Inquiry from "@/lib/models/Inquiry";

export async function uploadGalleryImage(formData: FormData) {
  try {
    await dbConnect();
    const files = formData.getAll("images") as File[];
    const imageUrls: string[] = [];

    for (const file of files) {
      if (file.size > 0) {
        const url = await processAndUpload(file);
        imageUrls.push(url);
        
        // Save each image to DB
        await GalleryImage.create({ url });
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

export async function getInquiries() {
  try {
    await dbConnect();
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    return { success: true, inquiries: JSON.parse(JSON.stringify(inquiries)) };
  } catch (error) {
    console.error("Get inquiries error:", error);
    return { success: false, error: "Failed to fetch inquiries" };
  }
}

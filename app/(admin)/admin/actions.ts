"use server";

import { processAndUpload, deleteFromS3 } from "@/lib/s3";
import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import GalleryImage from "@/lib/models/GalleryImage";
import Inquiry from "@/lib/models/Inquiry";
import Product from "@/lib/models/Product";

export async function uploadGalleryImage(formData: FormData) {
  try {
    await dbConnect();
    const files = formData.getAll("images") as File[];
    const imageUrls: string[] = [];

    for (const file of files) {
      if (file.size > 0) {
        const url = await processAndUpload(file);
        imageUrls.push(url);
        await GalleryImage.create({ url });
      }
    }
    
    revalidatePath("/gallery");
    revalidatePath("/");
    return { success: true, urls: imageUrls };
  } catch (error) {
    console.error("Upload action error:", error);
    return { success: false, error: "Failed to upload images" };
  }
}

export async function getGalleryImages() {
  try {
    await dbConnect();
    const images = await GalleryImage.find({}).sort({ createdAt: -1 });
    return { success: true, images: JSON.parse(JSON.stringify(images)) };
  } catch (error) {
    console.error("Get gallery images error:", error);
    return { success: false, error: "Failed to fetch images" };
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

export async function getProducts() {
  try {
    await dbConnect();
    const products = await Product.find().sort({ createdAt: -1 });
    return { success: true, products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.error("Get products error:", error);
    return { success: false, error: "Failed to fetch products" };
  }
}

export async function saveProduct(formData: FormData) {
  try {
    await dbConnect();
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;
    
    // Handle Multiple Images
    const imageFiles = formData.getAll("images") as File[];
    let currentImages = JSON.parse(formData.get("currentImages") as string || "[]");

    const newImageUrls: string[] = [];
    for (const file of imageFiles) {
      if (file.size > 0) {
        const url = await processAndUpload(file);
        newImageUrls.push(url);
      }
    }

    // Combine existing and new images
    const allImages = [...currentImages, ...newImageUrls];

    const productData = {
      title: title || "Untitled Product",
      price: price || "",
      description: description || "",
      images: allImages
    };

    if (id) {
      await Product.findByIdAndUpdate(id, productData);
    } else {
      await Product.create(productData);
    }

    revalidatePath("/products");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Save product error:", error);
    return { success: false, error: "Failed to save product" };
  }
}

export async function deleteProduct(id: string) {
  try {
    await dbConnect();
    const product = await Product.findById(id);
    if (product && product.images) {
      // Delete all images from S3
      for (const url of product.images) {
        await deleteFromS3(url);
      }
    }
    await Product.findByIdAndDelete(id);
    revalidatePath("/products");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Delete product error:", error);
    return { success: false, error: "Failed to delete product" };
  }
}

export async function deleteGalleryImage(id: string) {
  try {
    await dbConnect();
    const image = await GalleryImage.findById(id);
    if (image) {
      await deleteFromS3(image.url);
    }
    await GalleryImage.findByIdAndDelete(id);
    revalidatePath("/gallery");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Delete gallery image error:", error);
    return { success: false, error: "Failed to delete image" };
  }
}

export async function deleteMultipleGalleryImages(ids: string[]) {
  try {
    await dbConnect();
    const images = await GalleryImage.find({ _id: { $in: ids } });
    for (const image of images) {
      await deleteFromS3(image.url);
    }
    await GalleryImage.deleteMany({ _id: { $in: ids } });
    revalidatePath("/gallery");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Delete multiple gallery images error:", error);
    return { success: false, error: "Failed to delete images" };
  }
}

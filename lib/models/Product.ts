import mongoose, { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
  title: { type: String, required: false },
  price: { type: String, required: false },
  description: { type: String, required: false },
  images: [{ type: String }], // Array of image URLs
  category: { type: String, default: 'General' },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;

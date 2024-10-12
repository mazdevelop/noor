import mongoose, { Document, Schema } from 'mongoose';

interface Product extends Document {
  title: {
    en: string;
    fa: string;
  };
  description: {
    en: string;
    fa: string;
  };
  images: string[]; // Array of image URLs
  thumbnail: string; // Thumbnail image URL
  visibility: boolean; // Product visibility
}

const ProductSchema: Schema = new Schema(
  {
    title: {
      en: { type: String, required: true },
      fa: { type: String, required: true },
    },
    description: {
      en: { type: String, required: true },
      fa: { type: String, required: true },
    },
    images: [{ type: String, required: true }],
    thumbnail: { type: String, required: true },
    visibility: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model<Product>('Product', ProductSchema);

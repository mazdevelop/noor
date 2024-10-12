import mongoose, { Document, Schema } from 'mongoose';

interface Article extends Document {
  title: {
    en: string;
    fa: string;
  };
  content: {
    en: string;
    fa: string;
  };
  author: mongoose.Schema.Types.ObjectId;
  image: string; // Image field added for articles
  thumbnail: string; // Thumbnail image URL
  visibility: boolean; // Product visibility
}

const ArticleSchema: Schema = new Schema(
  {
    title: {
      en: { type: String, required: true },
      fa: { type: String, required: true },
    },
    content: {
      en: { type: String, required: true },
      fa: { type: String, required: true },
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String, required: true }, // New image field for the article
    thumbnail: { type: String, required: true },
    visibility: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Article || mongoose.model<Article>('Article', ArticleSchema);

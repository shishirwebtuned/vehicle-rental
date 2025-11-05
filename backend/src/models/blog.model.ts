import { strict } from "assert";
import mongoose from "mongoose";
import slugify from "slugify";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    previousSlugs: {
      type: [String],
      default: [],
    },

    description: { type: String, trim: true },
    image: {
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
    author: {
      type: String,
      trim: true,
      default:
        "Grateful Tours and Transportation Service Pvt. Ltd., Gairidhara, Kathmandu",
    },
    content: { type: String, trim: true },
    whyChooseUs: { type: String, trim: true },
    finalThoughts: { type: String, trim: true },
  },
  { timestamps: true }
);

blogSchema.pre("save", async function (next) {
  if (!this.isModified("title")) return next();

  const newSlug = slugify.default(this.title, { lower: true, strict: true });

  if (this.slug && this.slug !== newSlug) {
    this.previousSlugs = [...(this.previousSlugs || []), this.slug];
  }

  this.slug = newSlug;
  next();
});

export const Blog = mongoose.model("Blog", blogSchema);
export type BlogDocument = mongoose.InferSchemaType<typeof blogSchema>;

import mongoose, { Schema } from "mongoose";
import type { ICategory } from "../types/type.js";

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: {
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model("Category", categorySchema);
export type CategoryDocument = mongoose.InferSchemaType<typeof categorySchema>;

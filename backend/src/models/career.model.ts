import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    jobName: {
      type: String,
      required: [true, "Job name is required"],
      trim: true,
    },
    jobField: {
      type: String,
      required: [true, "Job field is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
      trim: true,
    },
    requirements: {
      type: [String],
      required: [true, "Job requirements are required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    type: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Internship", "Contract", "Remote"],
      required: [true, "Job type is required"],
    },
  },
  { timestamps: true }
);

export const Career = mongoose.model("Career", careerSchema);
export type CareerDocument = mongoose.InferSchemaType<typeof careerSchema>;

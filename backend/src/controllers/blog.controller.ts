import { Blog } from "../models/blog.model.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { sendResponse } from "../utils/sendResponse.js";
import cloudinary from "../utils/cloudinary.js";
import streamifier from "streamifier";
import multer from "multer";

const storage = multer.memoryStorage();
export const upload = multer({ storage });

export const createBlog = catchAsync(async (req, res) => {
  const { title, description, content, author, whyChooseUs, finalThoughts } =
    req.body;

  if (!title || !description || !content || !req.file)
    throw new AppError("All fields are required", 400);

  const existing = await Blog.findOne({ title });
  if (existing) throw new AppError("Blog with this title already exists", 409);

  const uploadToCloudinary = (fileBuffer: Buffer): Promise<any> => {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "blogs" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      streamifier.createReadStream(fileBuffer).pipe(uploadStream);
    });
  };

  const result = await uploadToCloudinary(req.file.buffer);

  const blog = new Blog({
    title,
    description,
    image: {
      url: result?.secure_url,
      public_id: result?.public_id,
    },
    content,
    author,
    whyChooseUs,
    finalThoughts,
  });

  await blog.save();

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Blog created successfully",
    data: {
      blog: {
        _id: blog._id,
        title: blog.title,
        description: blog.description,
        image: blog.image,
        content: blog.content,
        author: blog.author,
        whyChooseUs: blog.whyChooseUs,
        finalThoughts: blog.finalThoughts,
        slug: blog.slug,
      },
    },
  });
});

export const getBlogs = catchAsync(async (req, res) => {
  const blogs = (await Blog.find().sort({ createdAt: -1 }).lean()) || [];

  sendResponse(res, {
    message: blogs.length ? "Blogs fetched Successfully" : "No Blogs found",
    statusCode: 200,
    success: true,
    data: {
      blogs,
    },
  });
});

export const getBlogById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);
  if (!blog) throw new AppError("Blog not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog fetched successfully",
    data: { blog },
  });
});

export const getBlogBySlug = catchAsync(async (req, res) => {
  const { slug } = req.params;

  let blog = await Blog.findOne({ slug });

  let redirectTo: string | null = null;
  if (!blog) {
    blog = await Blog.findOne({ previousSlugs: slug });
    if (blog) {
      redirectTo = `/blogs/${blog.slug}`;
    }
  }

  if (!blog) throw new AppError("Blog not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog fetched successfully",
    data: { blog, redirectTo },
  });
});

export const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (!blog) throw new AppError("Blog not found", 404);

  if (req.file) {
    if (blog.image?.public_id) {
      await cloudinary.uploader.destroy(blog.image.public_id);
    }

    const streamUpload = (buffer: Buffer) =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "blogs" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(buffer).pipe(stream);
      });
    const result: any = await streamUpload(req.file.buffer);

    blog.image = {
      url: result.secure_url,
      public_id: result.public_id,
    };
  }

  const { title, description, content, author, whyChooseUs, finalThoughts } =
    req.body;

  if (title && title !== blog.title) blog.title = title;
  if (description) blog.description = description;
  if (content) blog.content = content;
  if (author) blog.author = author;
  if (whyChooseUs) blog.whyChooseUs = whyChooseUs;
  if (finalThoughts) blog.finalThoughts = finalThoughts;

  const updatedBlog = await blog.save();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog updated successfully",
    data: { updateBlog: updatedBlog },
  });
});

export const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findByIdAndDelete(id);

  if (!blog) throw new AppError("Blog not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog deleted successfully",
  });
});

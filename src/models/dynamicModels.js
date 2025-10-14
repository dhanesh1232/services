import dbConnect from "@/lib/db";
import mongoose from "mongoose";

/**
 * 🧱 safeModel()
 * Dynamically registers a Mongoose model **without redefining it** if it already exists.
 *
 * Useful when:
 * - Models are accessed across multiple serverless functions.
 * - You want to prevent "OverwriteModelError" caused by redefining schemas.
 *
 * @param {string} name - The name of the model (e.g. "Blog")
 * @param {Object} schemaDefinition - A plain schema object. `{}` allows flexible structure.
 * @param {string} collectionName - The actual MongoDB collection name (e.g. "blogs")
 * @returns {mongoose.Model} - The existing or newly created Mongoose model.
 *
 * @example
 * const User = safeModel("User", {}, "users");
 */
function safeModel(name, schemaDefinition, collectionName) {
  const schema = new mongoose.Schema(schemaDefinition, { strict: false });
  return mongoose.models[name] || mongoose.model(name, schema, collectionName);
}

/**
 * 🔌 Connects to MongoDB before accessing models.
 * This ensures all Mongoose operations happen on a live connection.
 *
 * Automatically reuses the cached connection from `lib/db.js`.
 */
await dbConnect();

/**
 * 📰 Blog Model
 * Represents a flexible Blog collection that can read/update existing data
 * from the `blogs` collection inside MongoDB.
 *
 * ✅ No schema constraints — ideal for read/write access without schema duplication.
 * ❌ Does not create or overwrite the collection if it already exists.
 *
 * @example
 * import { Blog } from "@/lib/models/global";
 * const posts = await Blog.find({ isPublished: true });
 */
export const Blog = safeModel("Blog", {}, "blogs");

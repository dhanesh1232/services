// lib/db.js

import mongoose from "mongoose";

/**
 * ⚙️ Global Mongoose configuration
 * Runs once per process. Disables strict query/populate modes
 * for more flexible query handling across different collections.
 */
mongoose.set("strictPopulate", false);
mongoose.set("strictQuery", false);

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "⚠️ Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * 🧠 Cached Mongoose Connection
 * Ensures we reuse existing connections in Next.js hot reload or serverless environments.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
    listenersAttached: false, // Track if we've added listeners
  };
}

/**
 * 📡 attachConnectionListeners()
 * Adds MongoDB connection status event listeners only once.
 * This helps you monitor real-time connection states (connected, error, disconnected)
 * without flooding your console during hot reloads.
 */
function attachConnectionListeners() {
  if (cached.listenersAttached) return;

  mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB connected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ MongoDB disconnected");
  });

  cached.listenersAttached = true;
}

/**
 * 🔌 dbConnect()
 * Creates or reuses a single global MongoDB connection.
 *
 * - Prevents multiple re-connections in serverless / Next.js environments.
 * - Automatically attaches listeners for connection events.
 * - Returns a live, ready-to-use Mongoose connection instance.
 *
 * @async
 * @returns {Promise<mongoose.Connection>} The active mongoose connection.
 *
 * @example
 * import dbConnect from "@/lib/db";
 * await dbConnect(); // ensures connection before querying models
 */
async function dbConnect() {
  attachConnectionListeners();

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      bufferCommands: false,
      maxPoolSize: 5,
      retryWrites: true,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => mongoose)
      .catch((err) => {
        cached.promise = null;
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (err) {
    cached.promise = null;
    throw err;
  }
}

export default dbConnect;

/**
 * 🧩 Usage
 * When you import `dbConnect` anywhere:
 * - It ensures MongoDB is connected before your model/query runs.
 * - It reuses the same connection across multiple API routes or pages.
 *
 * Example:
 * ```js
 * import dbConnect from "@/lib/db";
 * import { Blog } from "@/lib/models/blog";
 *
 * export async function GET() {
 *   await dbConnect();
 *   const posts = await Blog.find();
 *   return Response.json(posts);
 * }
 * ```
 */

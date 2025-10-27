import mongoose from "mongoose";
const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/, "Please fill a valid email address"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ipAddress: String,
  userAgent: String,
  metadata: mongoose.Schema.Types.Mixed,
  isSubscribed: {
    type: Boolean,
    default: true,
  },
});

export const Newsletter =
  mongoose.models.Newsletter || mongoose.model("Newsletter", newsletterSchema);

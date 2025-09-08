import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  phone: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    minlength: [100, "Message should be at least 100 characters"],
  },
  budget: {
    type: String,
    enum: {
      values: [
        "under-10k",
        "10k-50k",
        "50k-1l",
        "1l-5l",
        "over-5l",
        "not-sure",
      ],
      message: "Invalid budget range selected",
    },
    trim: true,
  },
  timeline: {
    type: String,
    enum: {
      values: [
        "asap",
        "2-weeks",
        "1-month",
        "3-months",
        "flexible",
        "not-sure",
      ],
      message: "Invalid timeline selected",
    },
    trim: true,
  },
  service: {
    type: String,
    required: [true, "Service is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ipAddress: String,
  userAgent: String,
  metadata: mongoose.Schema.Types.Mixed,
});

export const ServiceContact =
  mongoose.models.ServiceContact ||
  mongoose.model("ServiceContact", contactSchema);

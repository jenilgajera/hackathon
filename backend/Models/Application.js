// Models/Application.js
const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: String,
  mobile_number: String,
  email: String,
  status: {
    type: String,
    enum: ["draft", "submitted", "underreview", "approved", "rejected"],
    default: "draft",
  },
  currentStep: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  applicationType: {
    type: String,
    enum: ["new", "renewal", "modification"],
    default: "new",
  },
  originalApplication: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
  },
  renewalCount: {
    type: Number,
    default: 0,
  },
  submittedAt: Date,
});

module.exports = mongoose.model("Application", ApplicationSchema);

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
    enum: ["draft", "submitted","underreview", "approved", "rejected"],
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
  submittedAt: Date,
});

module.exports = mongoose.model("Application", ApplicationSchema);

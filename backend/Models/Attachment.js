// models/Attachment.js
const mongoose = require("mongoose");

const AttachmentSchema = new mongoose.Schema({
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
    required: true,
  },
  document_type: {
    type: String,
    required: true,
    enum: [
      'owner_photo',
      'aadhar_card',
      'pan_card',
      'self_assurance_video',
      'property_document',
      'insurance_policy',
      'building_plan_approval',
      'architectural_plan',
      'electricity_bill'
    ]
  },
  file_path: {
    type: String,
    required: true,
  },
  original_name: {
    type: String,
    required: true,
  },
  mime_type: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Attachment", AttachmentSchema);
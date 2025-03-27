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
  },
  file_url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Attachment", AttachmentSchema);

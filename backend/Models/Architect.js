const mongoose = require("mongoose");

const ArchitectSchema = new mongoose.Schema({
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  registration_no: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Architect", ArchitectSchema);

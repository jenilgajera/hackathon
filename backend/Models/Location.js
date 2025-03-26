const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  plot_details: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  landmark: String,
  village: String,
  taluka: {
    type: String,
    required: true,
  },
  pin_code: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Location", LocationSchema);

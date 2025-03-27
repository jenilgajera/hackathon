const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
    required: true,
  },
  project_name: {
    type: String,
    required: true,
  },
  area_type: {
    type: String,
    required: true,
  },
  plot_details: {
    type: String,
    required: true,
  },
  area_details: {
    type: String,
    required: true,
  },
  landmark: String,
  taluka_city_village: String,
  tp_number: String,
  fp_number: String,
  survey_number: String,
  sub_plot_number: String,
  pin_code: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Site", SiteSchema);

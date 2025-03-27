const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
    required: true,
  },
  occupancy_type: {
    type: String,
    required: true,
  },
  site_area: {
    type: Number,
    required: true,
  },
  road_width: {
    type: Number,
    required: true,
  },
  entrance_width: {
    type: Number,
    required: true,
  },
  entrance_height: {
    type: Number,
    required: true,
  },
  building_blocks: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);

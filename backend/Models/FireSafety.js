const mongoose = require("mongoose");

const FireSafetySchema = new mongoose.Schema({
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
    required: true,
  },
  fire_extinguishers: {
    type: Boolean,
    required: true,
  },
  extinguisher_date: Date,
  smoke_detectors: {
    type: Boolean,
    required: true,
  },
  fire_alarm_system: {
    type: Boolean,
    required: true,
  },
  fire_drills: {
    type: Boolean,
    required: true,
  },
  training_received: {
    type: Boolean,
    required: true,
  },
  fire_exit_knowledge: {
    type: Boolean,
    required: true,
  },
  extinguisher_usage: {
    type: Boolean,
    required: true,
  },
  evacuation_plan: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("FireSafety", FireSafetySchema);

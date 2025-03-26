const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authMiddleware");
const applicationController = require("../Controllers/applicationController");

// @route   POST /api/applications
// @desc    Create a new application
// @access  Private
router.post(
  "/applications",
  authenticate,
  applicationController.createApplication
);

// @route   GET /api/applications
// @desc    Get all applications for user
// @access  Private
router.get(
  "/applications",
  authenticate,
  applicationController.getApplications
);

// @route   GET /api/applications/:id
// @desc    Get application details
// @access  Private
router.get(
  "/applications/:id",
  authenticate,
  applicationController.getApplicationDetails
);

module.exports = router;

// routes/apiRoutes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const authenticate = require("../middlewares/authMiddleware");
const {
  savePersonalInfo,
  saveLocation,
  saveArchitect,
  saveSite,
  saveProject,
  saveFireSafety,
  saveAttachments,
  submitApplication,
  getDraftStatus,
  getApplications,
  getApplicationDetails,
  getAllApplicationsWithDetails,
  updateApplicationStatus
} = require("../Controllers/applicationController");
const { uploadAttachments } = require("../Config/multerConfig");

// Draft endpoints
router.post("/applications/personal", authenticate, savePersonalInfo);
router.post("/applications/location", authenticate, saveLocation);
router.post("/applications/architect", authenticate, saveArchitect);
router.post("/applications/site", authenticate, saveSite);
router.post("/applications/project", authenticate, saveProject);
router.post("/applications/fire-safety", authenticate, saveFireSafety);

// Fixed the status update route (it was missing a "/" in original code)
router.post("/applications/:id/status", authenticate, updateApplicationStatus);

router.post(
  "/applications/attachments",
  authenticate,
  (req, res, next) => {
    // Add error handling for Multer
    uploadAttachments(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading
        return res.status(400).json({
          message: err.message || "File upload error",
          code: err.code,
        });
      } else if (err) {
        // An unknown error occurred
        return res.status(500).json({
          message: err.message || "File upload failed",
        });
      }
      // Everything went fine, proceed to controller
      next();
    });
  },
  saveAttachments
);

// Application status endpoints
router.get("/applications/draft", authenticate, getDraftStatus);
router.put("/applications/:id/submit", authenticate, submitApplication);

// Existing endpoints
router.get("/applications", authenticate, getApplications);
router.get("/applications/:id", authenticate, getApplicationDetails);
router.get("/getAllApplicationsWithDetails", getAllApplicationsWithDetails);

module.exports = router;
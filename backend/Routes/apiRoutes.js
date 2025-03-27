// routes/apiRoutes.js
const express = require("express");
const router = express.Router();
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
} = require("../Controllers/applicationController");

// Draft endpoints
router.post("/applications/personal", authenticate, savePersonalInfo);
router.post("/applications/location", authenticate, saveLocation);
router.post("/applications/architect", authenticate, saveArchitect);
router.post("/applications/site", authenticate, saveSite);
router.post("/applications/project", authenticate, saveProject);
router.post("/applications/fire-safety", authenticate, saveFireSafety);
router.post("/applications/attachments", authenticate, saveAttachments);

// Application status endpoints
router.get("/applications/draft", authenticate, getDraftStatus);
router.put("/applications/:id/submit", authenticate, submitApplication);

// Existing endpoints
router.get("/applications", authenticate, getApplications);
router.get("/applications/:id", authenticate, getApplicationDetails);

module.exports = router;

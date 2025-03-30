// controllers/applicationController.js
const Application = require("../Models/Application");
const Location = require("../Models/Location");
const Architect = require("../Models/Architect");
const Site = require("../Models/Site");
const Project = require("../Models/Project");
const FireSafety = require("../Models/FireSafety");
const Attachment = require("../Models/Attachment");

const { uploadAttachments } = require('../Config/multerConfig');


// Helper function to get or create draft application
const getOrCreateDraft = async (userId) => {
  let application = await Application.findOne({
    user: userId,
    status: "draft",
  });

  if (!application) {
    application = new Application({
      user: userId,
      status: "draft",
    });
    await application.save();
  }

  return application;
};

// Save personal information
const savePersonalInfo = async (req, res) => {
  try {
    const { name, mobile_number, email } = req.body;
    const application = await getOrCreateDraft(req.user.id);

    application.name = name;
    application.mobile_number = mobile_number;
    application.email = email;
    application.currentStep = 2; // Move to next step

    await application.save();

    res.json({
      application,
      message: "Personal information saved successfully",
      nextStep: application.currentStep,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Save location information
const saveLocation = async (req, res) => {
  try {
    const application = await Application.findOne({
      user: req.user.id,
      status: "draft",
    });

    if (!application) {
      return res.status(404).json({ message: "No draft application found" });
    }

    let location = await Location.findOne({ application: application._id });

    if (location) {
      Object.assign(location, req.body);
    } else {
      location = new Location({
        application: application._id,
        ...req.body,
      });
    }

    await location.save();
    application.currentStep = 3;
    await application.save();

    res.json({
      location,
      message: "Location information saved successfully",
      nextStep: application.currentStep,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Save architect information
const saveArchitect = async (req, res) => {
  try {
    const application = await Application.findOne({
      user: req.user.id,
      status: "draft",
    });

    if (!application) {
      return res.status(404).json({ message: "No draft application found" });
    }

    let architect = await Architect.findOne({ application: application._id });

    if (architect) {
      Object.assign(architect, req.body);
    } else {
      architect = new Architect({
        application: application._id,
        ...req.body,
      });
    }

    await architect.save();
    application.currentStep = 4;
    await application.save();

    res.json({
      architect,
      message: "Architect information saved successfully",
      nextStep: application.currentStep,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Save site information
const saveSite = async (req, res) => {
  try {
    const application = await Application.findOne({
      user: req.user.id,
      status: "draft",
    });

    if (!application) {
      return res.status(404).json({ message: "No draft application found" });
    }

    let site = await Site.findOne({ application: application._id });

    if (site) {
      Object.assign(site, req.body);
    } else {
      site = new Site({
        application: application._id,
        ...req.body,
      });
    }

    await site.save();
    application.currentStep = 5;
    await application.save();

    res.json({
      site,
      message: "Site information saved successfully",
      nextStep: application.currentStep,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Save project information
const saveProject = async (req, res) => {
  try {
    const application = await Application.findOne({
      user: req.user.id,
      status: "draft",
    });

    if (!application) {
      return res.status(404).json({ message: "No draft application found" });
    }

    let project = await Project.findOne({ application: application._id });

    if (project) {
      Object.assign(project, req.body);
    } else {
      project = new Project({
        application: application._id,
        ...req.body,
      });
    }

    await project.save();
    application.currentStep = 6;
    await application.save();

    res.json({
      project,
      message: "Project information saved successfully",
      nextStep: application.currentStep,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Save fire safety information
const saveFireSafety = async (req, res) => {
  try {
    const application = await Application.findOne({
      user: req.user.id,
      status: "draft",
    });

    if (!application) {
      return res.status(404).json({ message: "No draft application found" });
    }

    let fireSafety = await FireSafety.findOne({ application: application._id });

    if (fireSafety) {
      Object.assign(fireSafety, req.body);
    } else {
      fireSafety = new FireSafety({
        application: application._id,
        ...req.body,
      });
    }

    await fireSafety.save();
    application.currentStep = 7;
    await application.save();

    res.json({
      fireSafety,
      message: "Fire safety information saved successfully",
      nextStep: application.currentStep,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveAttachments = async (req, res) => {
  try {
    console.log('Files received:', req.files); // Debug log
    
    const application = await Application.findOne({
      user: req.user.id,
      status: "draft",
    });

    if (!application) {
      // Clean up uploaded files if application not found
      if (req.files) {
        Object.values(req.files).forEach(files => {
          files.forEach(file => {
            try {
              if (fs.existsSync(file.path)) {
                fs.unlinkSync(file.path);
              }
            } catch (err) {
              console.error(`Error deleting file ${file.path}:`, err);
            }
          });
        });
      }
      return res.status(404).json({ message: "No draft application found" });
    }

    // Initialize attachments array
    const attachments = [];

    // Check if files were uploaded
    if (req.files && Object.keys(req.files).length > 0) {
      // First delete existing attachments for this application
      const existingAttachments = await Attachment.find({ application: application._id });
      await Promise.all(existingAttachments.map(async (attachment) => {
        try {
          if (fs.existsSync(attachment.file_path)) {
            fs.unlinkSync(attachment.file_path);
          }
        } catch (err) {
          console.error(`Error deleting file ${attachment.file_path}:`, err);
        }
      }));
      await Attachment.deleteMany({ application: application._id });

      // Process uploaded files
      for (const [fieldName, files] of Object.entries(req.files)) {
        // Ensure files is an array (Multer might return single file or array)
        const filesArray = Array.isArray(files) ? files : [files];
        
        for (const file of filesArray) {
          try {
            const newAttachment = new Attachment({
              application: application._id,
              document_type: fieldName,
              file_path: file.path,
              original_name: file.originalname,
              mime_type: file.mimetype,
              size: file.size
            });
            await newAttachment.save();
            attachments.push(newAttachment);
          } catch (err) {
            console.error(`Error saving attachment ${fieldName}:`, err);
            // Clean up the file if DB save failed
            try {
              if (fs.existsSync(file.path)) {
                fs.unlinkSync(file.path);
              }
            } catch (unlinkErr) {
              console.error(`Error cleaning up file ${file.path}:`, unlinkErr);
            }
            throw err; // Re-throw to be caught by the outer try-catch
          }
        }
      }
    } else {
      return res.status(400).json({ message: "No files were uploaded" });
    }

    application.currentStep = 8; // All steps completed
    await application.save();

    res.json({
      attachments,
      message: "Attachments saved successfully",
      nextStep: application.currentStep,
    });
  } catch (error) {
    console.error("Error in saveAttachments:", error);
    
    // Clean up uploaded files on error
    if (req.files) {
      Object.values(req.files).forEach(files => {
        const filesArray = Array.isArray(files) ? files : [files];
        filesArray.forEach(file => {
          try {
            if (fs.existsSync(file.path)) {
              fs.unlinkSync(file.path);
            }
          } catch (err) {
            console.error(`Error cleaning up file ${file.path}:`, err);
          }
        });
      });
    }
    
    res.status(500).json({ 
      message: error.message || "Failed to save attachments",
      error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};


// Submit complete application
const submitApplication = async (req, res) => {
  try {
    const application = await Application.findOne({
      _id: req.params.id,
      user: req.user.id,
      status: "draft",
    });

    if (!application) {
      return res.status(404).json({ message: "No draft application found" });
    }

    // Verify all required data is present
    const [location, architect, site, project, fireSafety, attachments] =
      await Promise.all([
        Location.findOne({ application: application._id }),
        Architect.findOne({ application: application._id }),
        Site.findOne({ application: application._id }),
        Project.findOne({ application: application._id }),
        FireSafety.findOne({ application: application._id }),
        Attachment.find({ application: application._id }),
      ]);

    if (
      !location ||
      !architect ||
      !site ||
      !project ||
      !fireSafety ||
      attachments.length === 0
    ) {
      return res.status(400).json({
        message: "All sections must be completed before submission",
        missingSections: {
          location: !location,
          architect: !architect,
          site: !site,
          project: !project,
          fireSafety: !fireSafety,
          attachments: attachments.length === 0,
        },
      });
    }

    // Update application status
    application.status = "submitted";
    application.submittedAt = new Date();
    await application.save();

    res.json({
      application,
      message: "Application submitted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get current draft status
const getDraftStatus = async (req, res) => {
  try {
    const application = await Application.findOne({
      user: req.user.id,
      status: "draft",
    });

    if (!application) {
      return res.status(404).json({ message: "No draft application found" });
    }

    // Get all related data
    const [location, architect, site, project, fireSafety, attachments] =
      await Promise.all([
        Location.findOne({ application: application._id }),
        Architect.findOne({ application: application._id }),
        Site.findOne({ application: application._id }),
        Project.findOne({ application: application._id }),
        FireSafety.findOne({ application: application._id }),
        Attachment.find({ application: application._id }),
      ]);

    res.json({
      application,
      location,
      architect,
      site,
      project,
      fireSafety,
      attachments,
      currentStep: application.currentStep,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all applications (both drafts and submitted)
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get application details by ID
const getApplicationDetails = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    // Check if the application belongs to the user
    if (application.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const [location, architect, site, project, fireSafety, attachments] =
      await Promise.all([
        Location.findOne({ application: application._id }),
        Architect.findOne({ application: application._id }),
        Site.findOne({ application: application._id }),
        Project.findOne({ application: application._id }),
        FireSafety.findOne({ application: application._id }),
        Attachment.find({ application: application._id }),
      ]);

    res.json({
      application,
      location,
      architect,
      site,
      project,
      fireSafety,
      attachments,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  savePersonalInfo,
  saveLocation,
  saveArchitect,
  saveSite,
  saveProject,
  saveFireSafety,
  saveAttachments,
  uploadAttachments,
  submitApplication,
  getDraftStatus,
  getApplications,
  getApplicationDetails,
};
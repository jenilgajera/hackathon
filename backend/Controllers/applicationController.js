const Application = require("../Models/Application");
const Location = require("../Models/Location");
const Architect = require("../Models/Architect");
const Site = require("../Models/Site");
const Project = require("../Models/Project");
const FireSafety = require("../Models/FireSafety");
const Attachment = require("../Models/Attachment");

const createApplication = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      // Personal info
      name,
      mobile_number,
      email,
      // Location info
      locationData,
      // Architect info
      architectData,
      // Site details
      siteData,
      // Project details
      projectData,
      // Fire safety
      fireSafetyData,
      // Attachments
      attachmentsData,
    } = req.body;

    // Create application
    const application = new Application({
      user: userId,
      name,
      mobile_number,
      email,
    });
    await application.save();

    // Create location
    const location = new Location({
      application: application._id,
      ...locationData,
    });
    await location.save();

    // Create architect
    const architect = new Architect({
      application: application._id,
      ...architectData,
    });
    await architect.save();

    // Create site
    const site = new Site({
      application: application._id,
      ...siteData,
    });
    await site.save();

    // Create project
    const project = new Project({
      application: application._id,
      ...projectData,
    });
    await project.save();

    // Create fire safety
    const fireSafety = new FireSafety({
      application: application._id,
      ...fireSafetyData,
    });
    await fireSafety.save();

    // Create attachments
    const attachments = await Promise.all(
      attachmentsData.map(async (attachment) => {
        const newAttachment = new Attachment({
          application: application._id,
          ...attachment,
        });
        await newAttachment.save();
        return newAttachment;
      })
    );

    res.status(201).json({
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
  createApplication,
  getApplications,
  getApplicationDetails,
};

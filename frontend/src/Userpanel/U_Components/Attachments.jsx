import React, { useState, useEffect } from "react";
import { applicationApi } from "../../Services/apiService";
import { useNavigate } from "react-router-dom";

export const Attachments = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState({});
  const [applicationData, setApplicationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [existingAttachments, setExistingAttachments] = useState({});
  const navigate = useNavigate();

  // Fetch the draft application data when component mounts
  useEffect(() => {
    const fetchDraftApplication = async () => {
      try {
        setIsLoading(true);
        const response = await applicationApi.getDraftStatus();
        setApplicationData(response.data);

        // Check if there are attachments and organize them by document type
        if (response.data.attachments && response.data.attachments.length > 0) {
          const attachmentsByType = {};
          response.data.attachments.forEach((attachment) => {
            attachmentsByType[attachment.document_type] = attachment;
          });
          setExistingAttachments(attachmentsByType);

          // If attachments exist, set uploadComplete to true
          if (Object.keys(attachmentsByType).length > 0) {
            setUploadComplete(true);
          }
        }

        console.log("Fetched application draft:", response.data);
      } catch (error) {
        console.error("Error fetching application draft:", error);
        // setError("Failed to load application data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDraftApplication();
  }, []);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setSelectedFiles((prev) => ({
      ...prev,
      [name]: files[0] ? files[0].name : null,
    }));
  };

  // Function to get file size in human-readable format
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // Function to get file icon based on mime type
  const getFileIcon = (mimeType) => {
    if (mimeType.startsWith("image/")) {
      return <i className="bi bi-file-image text-primary"></i>;
    } else if (mimeType.startsWith("video/")) {
      return <i className="bi bi-file-play text-danger"></i>;
    } else if (mimeType === "application/pdf") {
      return <i className="bi bi-file-pdf text-danger"></i>;
    } else {
      return <i className="bi bi-file-earmark text-secondary"></i>;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!applicationData || !applicationData.application._id) {
      setError("Application ID not found. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData(e.target);

      // Add the application ID to the form data
      formData.append("applicationId", applicationData.application._id);

      // Add debug logs to see what's being sent
      console.log("FormData contents:");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const response = await applicationApi.saveAttachments(formData);
      setSuccess(true);
      setUploadComplete(true);

      // Update existing attachments after successful upload
      if (response.data.attachments && response.data.attachments.length > 0) {
        const attachmentsByType = {};
        response.data.attachments.forEach((attachment) => {
          attachmentsByType[attachment.document_type] = attachment;
        });
        setExistingAttachments(attachmentsByType);
      }

      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error saving attachments:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to save attachments";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleFinalSubmit = async () => {
    if (!applicationData || !applicationData.application._id) {
      setError("Application ID not found. Please try again later.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      // Call the API to submit the application
      const response = await applicationApi.submitApplication(
        applicationData.application._id
      );
      console.log("Application submitted successfully:", response.data);

      // Navigate to a success page or application status page
      navigate("/file-noc");
    } catch (error) {
      console.error("Error submitting application:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to submit application";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to check if all required documents are uploaded
  const checkAllDocumentsUploaded = () => {
    const requiredDocuments = [
      "owner_photo",
      "aadhar_card",
      "pan_card",
      "self_assurance_video",
      "property_document",
      "insurance_policy",
      "building_plan_approval",
      "architectural_plan",
      "electricity_bill",
    ];

    return requiredDocuments.every((docType) => existingAttachments[docType]);
  };

  // Function to render the attachment status for a specific document type
  const renderAttachmentStatus = (documentType, label) => {
    const attachment = existingAttachments[documentType];

    if (attachment) {
      return (
        <div className="alert alert-success d-flex align-items-center p-2 mb-2">
          <div className="me-3">{getFileIcon(attachment.mime_type)}</div>
          <div className="flex-grow-1">
            <div className="fw-semibold">{attachment.original_name}</div>
            <div className="small text-muted">
              {formatFileSize(attachment.size)} • Uploaded
            </div>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={() =>
                window.open(
                  `${
                    process.env.REACT_APP_API_URL || "http://localhost:5000"
                  }/${attachment.file_path.replace(/\\/g, "/")}`,
                  "_blank"
                )
              }
            >
              <i className="bi bi-eye me-1"></i>View
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "300px" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Application ID display - for debugging */}
        {applicationData &&
          applicationData.application &&
          applicationData.application.id && (
            <div className="alert alert-info mb-4">
              Application ID: {applicationData.application.id}
            </div>
          )}

        {/* Section 1: Personal Documents */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 1: Personal Documents
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Owner Photo */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="owner_photo" className="form-label">
                    Owner Photo*
                  </label>
                  {renderAttachmentStatus("owner_photo", "Owner Photo")}
                  {!existingAttachments.owner_photo && (
                    <>
                      <input
                        type="file"
                        className="form-control"
                        id="owner_photo"
                        name="owner_photo"
                        accept="image/*"
                        onChange={handleFileChange}
                        required={!existingAttachments.owner_photo}
                      />
                      {selectedFiles.owner_photo && (
                        <div className="text-muted small mt-1">
                          Selected: {selectedFiles.owner_photo}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Aadhar Card */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="aadhar_card" className="form-label">
                    Aadhar Card*
                  </label>
                  {renderAttachmentStatus("aadhar_card", "Aadhar Card")}
                  {!existingAttachments.aadhar_card && (
                    <>
                      <input
                        type="file"
                        className="form-control"
                        id="aadhar_card"
                        name="aadhar_card"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        required={!existingAttachments.aadhar_card}
                      />
                      {selectedFiles.aadhar_card && (
                        <div className="text-muted small mt-1">
                          Selected: {selectedFiles.aadhar_card}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* PAN Card */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="pan_card" className="form-label">
                    PAN Card*
                  </label>
                  {renderAttachmentStatus("pan_card", "PAN Card")}
                  {!existingAttachments.pan_card && (
                    <>
                      <input
                        type="file"
                        className="form-control"
                        id="pan_card"
                        name="pan_card"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        required={!existingAttachments.pan_card}
                      />
                      {selectedFiles.pan_card && (
                        <div className="text-muted small mt-1">
                          Selected: {selectedFiles.pan_card}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Self Assurance Video */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="self_assurance_video" className="form-label">
                    Self Assurance Video*
                  </label>
                  {renderAttachmentStatus(
                    "self_assurance_video",
                    "Self Assurance Video"
                  )}
                  {!existingAttachments.self_assurance_video && (
                    <>
                      <input
                        type="file"
                        className="form-control"
                        id="self_assurance_video"
                        name="self_assurance_video"
                        accept="video/*"
                        onChange={handleFileChange}
                        required={!existingAttachments.self_assurance_video}
                      />
                      {selectedFiles.self_assurance_video && (
                        <div className="text-muted small mt-1">
                          Selected: {selectedFiles.self_assurance_video}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Property Documents */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 2: Property Documents
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Property Card / Property Document */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="property_document" className="form-label">
                    Property Card / Property Document*
                  </label>
                  {renderAttachmentStatus(
                    "property_document",
                    "Property Document"
                  )}
                  {!existingAttachments.property_document && (
                    <>
                      <input
                        type="file"
                        className="form-control"
                        id="property_document"
                        name="property_document"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        required={!existingAttachments.property_document}
                      />
                      {selectedFiles.property_document && (
                        <div className="text-muted small mt-1">
                          Selected: {selectedFiles.property_document}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Insurance Policy */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="insurance_policy" className="form-label">
                    Insurance Policy*
                  </label>
                  {renderAttachmentStatus(
                    "insurance_policy",
                    "Insurance Policy"
                  )}
                  {!existingAttachments.insurance_policy && (
                    <>
                      <input
                        type="file"
                        className="form-control"
                        id="insurance_policy"
                        name="insurance_policy"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        required={!existingAttachments.insurance_policy}
                      />
                      {selectedFiles.insurance_policy && (
                        <div className="text-muted small mt-1">
                          Selected: {selectedFiles.insurance_policy}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Building Plan Documents */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 3: Building Plan Documents
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Building Plan Approval Copy */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="building_plan_approval"
                    className="form-label"
                  >
                    Building Plan Approval Copy*
                  </label>
                  {renderAttachmentStatus(
                    "building_plan_approval",
                    "Building Plan Approval"
                  )}
                  {!existingAttachments.building_plan_approval && (
                    <>
                      <input
                        type="file"
                        className="form-control"
                        id="building_plan_approval"
                        name="building_plan_approval"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        required={!existingAttachments.building_plan_approval}
                      />
                      {selectedFiles.building_plan_approval && (
                        <div className="text-muted small mt-1">
                          Selected: {selectedFiles.building_plan_approval}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Architectural Building Plan */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="architectural_plan" className="form-label">
                    Architectural Building Plan*
                  </label>
                  {renderAttachmentStatus(
                    "architectural_plan",
                    "Architectural Plan"
                  )}
                  {!existingAttachments.architectural_plan && (
                    <>
                      <input
                        type="file"
                        className="form-control"
                        id="architectural_plan"
                        name="architectural_plan"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        required={!existingAttachments.architectural_plan}
                      />
                      {selectedFiles.architectural_plan && (
                        <div className="text-muted small mt-1">
                          Selected: {selectedFiles.architectural_plan}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Other Documents */}
        <div className="section-container position-relative mb-4">
          {/* Section Header */}
          <div
            className="section-header position-absolute bg-white px-3 py-1 rounded"
            style={{ top: "-15px", left: "20px", zIndex: 1 }}
          >
            <h5 className="mb-0" style={{ color: "#582105" }}>
              Section 4: Other Documents
            </h5>
          </div>

          {/* Section Content */}
          <div
            className="section-content bg-light p-4 border-2 rounded-3"
            style={{ border: "2px solid #582105", paddingTop: "30px" }}
          >
            <div className="row g-3">
              {/* Electricity Bill Section Letter */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="electricity_bill" className="form-label">
                    Electricity Bill Section Letter*
                  </label>
                  {renderAttachmentStatus(
                    "electricity_bill",
                    "Electricity Bill"
                  )}
                  {!existingAttachments.electricity_bill && (
                    <>
                      <input
                        type="file"
                        className="form-control"
                        id="electricity_bill"
                        name="electricity_bill"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        required={!existingAttachments.electricity_bill}
                      />
                      {selectedFiles.electricity_bill && (
                        <div className="text-muted small mt-1">
                          Selected: {selectedFiles.electricity_bill}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document Upload Status */}
        {uploadComplete && checkAllDocumentsUploaded() && (
          <div className="alert alert-success mt-3">
            <i className="bi bi-check-circle-fill me-2"></i>
            All required documents have been uploaded. Your application is ready
            to submit.
          </div>
        )}

        {uploadComplete && !checkAllDocumentsUploaded() && (
          <div className="alert alert-warning mt-3">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            Some required documents are still missing. Please upload all
            required documents.
          </div>
        )}

        {/* Buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg rounded-pill px-4"
            onClick={() => window.history.back()}
          >
            <i className="bi bi-arrow-left me-2"></i>Back
          </button>

          {!uploadComplete ? (
            <button
              type="submit"
              className="btn btn-primary btn-lg rounded-pill px-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Uploading...
                </>
              ) : (
                <>
                  <i className="bi bi-cloud-arrow-up me-2"></i>
                  Upload Documents
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success btn-lg rounded-pill px-4"
              onClick={handleFinalSubmit}
              disabled={isSubmitting || !checkAllDocumentsUploaded()}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Submitting...
                </>
              ) : (
                <>
                  <i className="bi bi-check-circle me-2"></i>
                  Submit Application
                </>
              )}
            </button>
          )}
        </div>

        {/* Error/Success Messages */}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {success && !uploadComplete && (
          <div className="alert alert-success mt-3">
            Documents uploaded successfully! You can now submit your
            application.
          </div>
        )}
        {success && uploadComplete && (
          <div className="alert alert-info mt-3">
            Ready to submit your application. Click "Submit Application" to
            finalize.
          </div>
        )}
      </form>
    </div>
  );
};

export default Attachments;

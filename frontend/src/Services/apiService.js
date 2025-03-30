import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Replace with your actual API base URL

// Create axios instance with auth token
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } 
return config;
});

// Application API functions
export const applicationApi = {
  // Get current draft status
  getDraftStatus: () => api.get("/applications/draft"),

  // Save personal information
  savePersonalInfo: (data) => api.post("/applications/personal", data),

  // Save location information
  saveLocation: (data) => api.post("/applications/location", data),

  // Save architect information
  saveArchitect: (data) => api.post("/applications/architect", data),

  // Save site information
  saveSite: (data) => api.post("/applications/site", data),

  // Save project information
  saveProject: (data) => api.post("/applications/project", data),

  // Save fire safety information
  saveFireSafety: (data) => api.post("/applications/fire-safety", data),

  // Save attachments
  saveAttachments: (formData) => api.post("/applications/attachments", formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }),
  // Submit application
  submitApplication: (id) => api.put(`/applications/${id}/submit`),

  // Get all applications
  getApplications: () => api.get("/applications"),

  // Get application details by ID
  getApplicationDetails: (id) => api.get(`/applications/${id}`),
};

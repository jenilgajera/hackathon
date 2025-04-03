import React from 'react';

const CertificateDownload = ({ applicationId }) => {
  const handleDownload = () => {
    const downloadUrl = `${'http://localhost:5000'}/api/applications/${applicationId}/certificate`;
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', `fire-safety-certificate-${applicationId}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center my-4">
      <button 
        onClick={handleDownload}
        className="btn btn-primary btn-lg px-4 py-2"
      >
        <i className="bi bi-file-earmark-pdf me-2"></i>
        Download Certificate
      </button>
      <p className="text-muted mt-2">
        Download your official Fire Safety Certificate (PDF format)
      </p>
    </div>
  );
};

export default CertificateDownload;
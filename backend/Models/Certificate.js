const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application',
    required: true
  },
  certificateNumber: {
    type: String,
    required: true,
    unique: true
  },
  issuedDate: {
    type: Date,
    default: Date.now
  },
  expiryDate: {
    type: Date,
    required: true
  },
  isValid: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

// Generate a unique certificate number
CertificateSchema.pre('save', async function(next) {
  if (this.isNew) {
    const currentYear = new Date().getFullYear();
    // Get count of certificates this year and format as FIRE-YYYY-XXXXX
    const count = await this.constructor.countDocuments({
      createdAt: {
        $gte: new Date(`${currentYear}-01-01`),
        $lte: new Date(`${currentYear}-12-31`)
      }
    });
    
    this.certificateNumber = `FIRE-${currentYear}-${(count + 1).toString().padStart(5, '0')}`;
    
    // Set expiry date to 1 year from now if not already set
    if (!this.expiryDate) {
      const expiry = new Date();
      expiry.setFullYear(expiry.getFullYear() + 1);
      this.expiryDate = expiry;
    }
  }
  next();
});

module.exports = mongoose.model('Certificate', CertificateSchema);
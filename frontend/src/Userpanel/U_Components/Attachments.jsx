export const Attachments = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="documents" className="form-label">
            Upload Required Documents*
          </label>
          <input
            type="file"
            className="form-control"
            id="documents"
            multiple
            required
          />
        </div>

        <div className="mb-3">
          <button type="button" className="btn btn-secondary">
            Save as Draft
          </button>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="firenocTermsCheckbox"
            required
          />
          <label className="form-check-label" htmlFor="firenocTermsCheckbox">
            I have read all the above terms and conditions and understand them fully. I declare that I am submitting only one application for Firenoc and I haven't received any other scholarship, stipend, or fellowship in this current session under any other central/state government scheme. Further, I state that all information furnished by me is correct to my knowledge. In case of any false information or suppression of necessary data, my application is liable to get cancelled at any stage of the process, and the entire amount of the scholarship/fellowship will be refunded by me or recovered from me. The decision of the Firenoc authorities shall be final and binding on me.
          </label>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <button type="button" className="btn btn-primary me-2">
              Verify Mobile Number
            </button>
            <button type="submit" className="btn btn-success">
              Confirm & Final Submit
            </button>
          </div>
          <button type="button" className="btn" style={{background:"linear-gradient(to right, #582105, #a44a1e)"}}>
            Print Application
          </button>
        </div>

        <div className="mb-3">
          <p className="text-danger">
            <strong>Note:</strong> Once you submit your application, you will not be able to make any changes. Please verify all details and documents before final submission.
          </p>
        </div>
      </form>
    </div>
  );
};
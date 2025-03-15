export const ApplicationDetails = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name*
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number*
          </label>
          <input type="tel" className="form-control" id="mobile" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email ID*
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        {/* Add more fields as needed */}
      </form>
    </div>
  );
};

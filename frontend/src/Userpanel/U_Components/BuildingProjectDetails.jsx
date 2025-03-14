export const BuildingProjectDetails = () => {
  return (
    <div>
      <h3>Building Project Details</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="projectName" className="form-label">
            Name*
          </label>
          <input
            type="text"
            className="form-control"
            id="projectName"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="siteArea" className="form-label">
            Site Area/Plot Area (in Sq.Mtrs)*
          </label>
          <input
            type="number"
            className="form-control"
            id="siteArea"
            required
          />
        </div>
        {/* Add more fields as needed */}
      </form>
    </div>
  );
};

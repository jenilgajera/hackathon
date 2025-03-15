export const SiteDetails = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="district" className="form-label">
            District*
          </label>
          <input type="text" className="form-control" id="district" required />
        </div>
        <div className="mb-3">
          <label htmlFor="plotNo" className="form-label">
            Plot/House No., Building/Company/Apartment Name/No.*
          </label>
          <input type="text" className="form-control" id="plotNo" required />
        </div>
        {/* Add more fields as needed */}
      </form>
    </div>
  );
};

export const FireSafetyMeasures = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="fireStaff" className="form-label">
            Names of Trained Fire Fighting Staff*
          </label>
          <input type="text" className="form-control" id="fireStaff" required />
        </div>
        <div className="mb-3">
          <label htmlFor="approachRoad" className="form-label">
            Approach Road Width (in Mtrs)*
          </label>
          <input
            type="number"
            className="form-control"
            id="approachRoad"
            required
          />
        </div>
        {/* Add more fields as needed */}
      </form>
    </div>
  );
};

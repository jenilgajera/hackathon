export const Attachments = () => {
  return (
    <div>
      <h3>Attachments</h3>
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
      </form>
    </div>
  );
};

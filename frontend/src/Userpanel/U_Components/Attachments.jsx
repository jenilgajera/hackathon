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
      </form>
    </div>
  );
};

import React from "react";

const CategoriesForm = ({handleSubmit,value,setValue}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="m-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary ms-3">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoriesForm;

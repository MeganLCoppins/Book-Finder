import React from "react";

function Form({query, handleInputChange, handleFormSubmit}) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        id="Title"
        name="query"
        value={query}
        onChange={handleInputChange}
        className="form-control"
        placeholder="Book's Name"
        aria-label="Book Name"
        aria-describedby="button-addon2"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleFormSubmit}
          style={{
            backgroundColor: "rgb(198, 224, 247)",
            borderColor: "purple",
            color: "purple",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Form;

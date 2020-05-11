import React from "react";

function Form({query, handleInputChange, handleFormSubmit}) {
  return (
    <div className="input-group mb-3"
    style={{
      backgroundColor: "lavender",
      padding: "10%",
      paddingTop: "3%",
      paddingBottom: "20%",
      marginBottom: "10%",
    }}>
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
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Form;

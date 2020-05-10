import React from "react";

function Form() {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Book's Name"
        aria-label="Book Name"
        aria-describedby="button-addon2"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Form;

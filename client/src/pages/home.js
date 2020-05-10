import React, { useState } from "react";


function Home() {

  // const [formObject, setFormObject] = useState({})
  // const []

    
  return (
    <div>
        <div className="input-group mb-3" style={{backgroundColor: "lavender", padding: "10%", paddingTop: "3%", paddingBottom: "20%", marginBottom: "10%"}}>
          <input
            type="text"
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
              style={{backgroundColor:"lavender", borderColor: "purple", color: "purple"}}
            >
              Search
            </button>
          </div>
        </div>
    </div>
  );
}
export default Home;

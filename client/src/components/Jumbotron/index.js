import React from "react";

function Jumbotron(){
    return(
        <div className="jumbotron jumbotron-fluid" style={{width: "100%", textAlign: "center", color: "darkslateblue", marginBottom: "0px", marginTop: "40px", backgroundColor: "lightsteelblue"}}>
          <div className="container">
            <h1 className="display-4">Google Book Finder</h1>
            <p className="lead">Search for and Save Your Book of Choice</p>
          </div>
        </div>
    )
}
export default Jumbotron;
import React from "react";


function Jumbotron(){
    return(
        <div className="jumbotron jumbotron-fluid" style={{width: "100%", textAlign: "center", color: "darkslateblue", marginBottom: "0px", marginTop: "80px", backgroundColor: "rgb(198, 224, 247)"}}>
          <div className="container">
            <h1 className="display-4" style={{fontWeight: "bold"}}>Google Book Finder</h1>
            <h3 className="lead" style={{fontSize: "25px"}}>Search for and Save Your Book of Choice</h3>
          </div>
        </div>
    )
}
export default Jumbotron;
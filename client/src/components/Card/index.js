import React from "react";

function Card({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <div className="card" style={{width: "70%", marginLeft: "15%", backgroundColor: "rgb(198, 224, 247)"}}>
        <h3 className="card-title" style={{textAlign: "center", paddingTop: "3%", paddingBottom: "3%"}}>{title}</h3>
        <h5 style={{backgroundColor: "rgb(198, 224, 247)", textAlign: "center"}}><strong>Authors: </strong>{authors}</h5>
      <img src={image} className="card-img-top" alt={title} style={{width: "200px", marginLeft: "34%", marginTop: "3%"}}/>
      <div className="card-body" style={{textAlign: "center"}}>
        <h5 style={{textAlign: "center"}}>{subtitle}</h5>
        <a href={link} style={{color: "black", fontWeight: "bold"}}>View the Book!</a>
        <p className="card-text" style={{textAlign: "left"}}>
          {description}
        </p>
      <ul className="list-group list-group-flush" style={{textAlign: "center"}}>
        <Button />
      </ul>
      </div>
    </div>
  );
}
export default Card;
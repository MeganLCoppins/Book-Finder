import React from "react";

function Card({ title, subtitle, authors, link, description, image }) {
  return (
    <div className="card" style={{width: "70%", marginLeft: "15%", backgroundColor: "rgb(198, 224, 247)"}}>
        <h3 className="card-title" style={{textAlign: "center", paddingTop: "3%", paddingBottom: "3%"}}>{title}</h3>
      <img src={image} className="card-img-top" alt={title} style={{width: "350px", marginLeft: "20%"}}/>
      <div className="card-body">
        <h5 style={{textAlign: "center"}}>{subtitle}</h5>
        <p className="card-text">
          {description}
        </p>
      <ul className="list-group list-group-flush" style={{textAlign: "center"}}>
        <li className="list-group-item"><strong>Authors: </strong>{authors}</li>
        <a href={link} style={{color: "black"}}>View the Book!</a>
      </ul>
      </div>
    </div>
  );
}
export default Card;
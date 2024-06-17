import React from "react";

const Card = (props) => {
  return (
    <div className="timeline-item">
      <i className={props.icon}></i>
      <span className="timeline-title">{props.year}</span>
      <h3 className="timeline-titile">{props.title}</h3>
      <p className="timeline-text">{props.desc}</p>
    </div>
  );
};

export default Card;

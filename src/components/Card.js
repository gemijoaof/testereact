import React from "react";
import "./Card.css";

const Card = props => {
  const { name, email } = props.user;
  return (
    <div className="card">
      <img alt="robot" src={`https://robohash.org/${name}?size=300x300`}></img>
      <h4>{name.toUpperCase()}</h4>
      <p>{email}</p>
    </div>
  );
};

export default Card;

import React from "react";

const InfoCard = ({card}) => {
    const {name, description, icons , bgClass} = card;
  return (
    <div className={`card p-6 text-white md:card-side shadow-xl ${bgClass}`}>
      <figure>
        <img src={icons} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;

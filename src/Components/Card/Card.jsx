import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ name, population, capital, region, flag }) {
  return (
    <Link to={`country/${name}`}>
      <div className="card">
        <div className="card-img">
          <img src={flag} alt="Card Image" />
        </div>
        <div className="info-part">
          <h2 className="country-name">{name}</h2>
          <p className="about">
            <span className="title">Population</span>:{population}
          </p>
          <p className="about">
            <span className="title">Region</span>:{region}
          </p>
          <p className="about">
            <span className="title">Capital</span>:{capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;

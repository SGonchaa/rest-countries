import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./country.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";

const Country = () => {
  const { country } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then((response) => {
        setDetail(response.data);
        console.log(response.data);
        console.log(detail);
      });
  }, []);
  return (
    <div className="country">
      <div className="back">
        <Link to="/">
          <button>
            <MdOutlineKeyboardBackspace className="back-icon"></MdOutlineKeyboardBackspace>{" "}
            Back
          </button>
        </Link>
      </div>
      <div className="about-country">
        <div className="country-flag">
          <img src={detail[0]?.flags?.svg} alt="a" />
        </div>
        <div className="country-information">
          <h1>{detail[0]?.name?.common} </h1>
          <div className="country-text">
            <div className="country-text-left">
              <p>
                Native Name:
                <span>{detail[0]?.name?.common}</span>
              </p>
              <p>
                Population:
                <span>{detail[0]?.population}</span>
              </p>
              <p>
                Region:
                <span>{detail[0]?.region}</span>
              </p>
              <p>
                Sub Region:
                <span>{detail[0]?.subregion}</span>
              </p>
              <p>
                Capital:
                <span>{detail[0]?.capital}</span>
              </p>
              <p>
                Border:
                {detail[0]?.borders?.map((border) => {
                  return <span className="border">{border}</span>;
                })}
              </p>
            </div>
            <div className="country-text-right">
              <p>
                Top Level Domain:
                <span></span>
              </p>
              <p>
                Currencies:
                <span></span>
              </p>
              <p>
                Languages:
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;

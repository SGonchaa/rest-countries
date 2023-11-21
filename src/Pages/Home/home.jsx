import React, { useEffect, useState } from "react";
import "./home.css";
import { BiSearchAlt2 } from "react-icons/bi";
import Card from "../../Components/Card/Card";
import axios from "axios";

function Main() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="countries">
      <div className="countries-search-filter">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for country..."
            onChange={(e) => {
              if (e.currentTarget.value) {
                axios
                  .get(
                    `https://restcountries.com/v3.1/name/${e.currentTarget.value}`
                  )
                  .then((response) => {
                    try {
                      if (response.status !== 404) {
                        setCountries(response.data);
                      }
                    } catch (error) {
                      setCountries(countries);
                      console.log(error);
                    }
                  });
              }
            }}
          />
          <div className="search-icon">
            <BiSearchAlt2 className="search-icon"></BiSearchAlt2>
          </div>
        </div>
        <div className="filter">
          <select
            onChange={(e) => {
              if (e.currentTarget.value) {
                axios
                  .get(
                    `https://restcountries.com/v3.1/region/${e.currentTarget.value}`
                  )
                  .then((response) => {
                    setCountries(response.data);
                  });
              }
            }}
            id="regions"
            name="regionlist"
            form="regionform"
          >
            <option value="">Filter by region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="countries-cards">
        {countries.map((country) => {
          return (
            <Card
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              capital={country.capital}
              region={country.region}
              flag={country.flags.png}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;

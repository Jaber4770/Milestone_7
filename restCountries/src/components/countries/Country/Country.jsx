import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisited }) => {


    const { name, flags, capital, continents, population, region, startOfWeek, subregion, timezones, area } = country;

    const [visited, setVisited] = useState(false);

    const handleVisit = () => {
        setVisited(!visited);
    }
    return (
        <div className= {`countryBox ${visited && "visited"}`}>
            <h1>Name: {name?.common}</h1>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Continent: {continents}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Subregion: {subregion}</p>
            <p>Start Of Week: {startOfWeek}</p>
            <p>Time Zones: {timezones}</p>
            <p>Area: {area}</p>
            <button onClick={handleVisit}>{visited ? "Visited" : "Going"}</button>
            {visited ? "   I have visited this Country." : "   I want to visit this country."} <br />
            <button onClick={() => handleVisited(country?.name?.common)}>Add to visited List</button>
        </div>

    );
};

export default Country;



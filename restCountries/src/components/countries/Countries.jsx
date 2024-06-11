import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import "./Countries.css"

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisited = country => {
        const newVisitedCountry = [...visitedCountries, country];
        console.log(newVisitedCountry);
        setVisitedCountries(newVisitedCountry);
    }

    return (

        <div>
            <h1>Lets go!</h1>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisited={handleVisited} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
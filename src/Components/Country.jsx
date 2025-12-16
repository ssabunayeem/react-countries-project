import React, { useState } from 'react';
import './country.css';

const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    }


    // console.log(country);

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags?.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population : {country.population.population} </p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "➡️ Big Country" : "➡️ small Country"}</p>
            <button onClick={handleVisited}>{visited ? 'visited' : 'not visited'}</button>
        </div>
    );
};

export default Country;
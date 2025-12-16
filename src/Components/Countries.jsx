import React, { use, useState } from 'react';
import Country from './Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle visited countries', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    // console.log(countries);

    return (
        <div>
            <h2>In the countries : {countries.length}</h2>


            <h2>Total country visited : {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>



            <h2>Total visited Flags: {visitedFlags.length}</h2>
            <div className='visited-flags'>
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>


            <div className='countries'>
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlags={handleVisitedFlags}>
                        </Country>)
                }
            </div>


        </div>
    );
};

export default Countries;
import React from 'react';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json());

const Countries = () => {
    return (
        <div>
            <h1>In the Countries Project workflow</h1>
        </div>
    );
};

export default Countries;
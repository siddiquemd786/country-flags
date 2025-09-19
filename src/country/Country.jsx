// src/country/Country.jsx
import React from 'react';


const Country = ({country}) => {

 console.log(country)
    return (
        <div>
            <img src={country.flags.flags.png} alt="" /> 
            <h1>name:{country.name.common}</h1>
            <p>Population : {country.population.population}</p>
            
        </div>
    );
};

export default Country;
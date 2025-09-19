// src/countries/Countries.jsx
import React, { use } from 'react';
import Country from '../country/Country';

const Countries = ({countriesPromise}) => {

    const coutriesData=use(countriesPromise)
    const countries=coutriesData.countries
    
    
    return (
        <div>
            <h1>country {countries.length}</h1>
            { 
                countries.map(country=> <Country key={country.ccn3.ccn3} country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;
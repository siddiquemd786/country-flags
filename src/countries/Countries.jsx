// src/countries/Countries.jsx
import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {

const [visitedcountry,setvisitedcountry]=useState([])
const [visitedflags,setvisitedflags]=useState([])

    const handalercountryvisited=(country)=>{
        
       const newvisitedcountry=[...visitedcountry,country]
       console.log(newvisitedcountry)
        setvisitedcountry(newvisitedcountry)
    }
    const handalervistedflags=(flags)=>{
        

        const newvisitedflags=[...visitedflags,flags]
        setvisitedflags(newvisitedflags)
    }

    const coutriesData=use(countriesPromise)
    const countries=coutriesData.countries
    
    
    return (
        <div>
            <h1>country {countries.length}</h1>
            <h1>Visited Countries Total={visitedcountry.length} </h1>
            <h1>visited flags total={visitedflags.length}</h1>
           <ol >
             {visitedcountry.map(country=><li key={country.ccn3.ccn3} >  {country.name.common}</li>)}
           </ol>
           <div>
            {visitedflags.map((flags,index)=> <img key={index} src={flags} alt="" /> )}
           </div>
          <div className='countries'>
              { 
                countries.map(country=> <Country handalervistedflags={handalervistedflags}
                    handalercountryvisited={handalercountryvisited}  key={country.ccn3.ccn3} country={country}></Country>)
            }
            
          </div>
        </div>
    );
};

export default Countries;
// src/country/Country.jsx
import React, {  useState } from 'react';
import  './country.css'


const Country = ({country,handalercountryvisited,handalervistedflags}) => {
    

         const [visited,setvisited]=useState(false)

    const handaler=()=>{
    //    if(visited){
    //     setvisited(false)
    //    }else{
    //     setvisited(true)
    //    }
    // setvisited(visited? false:true)
    setvisited(!visited)
    handalercountryvisited(country)

    }
    const handalerflags=()=>{
      handalervistedflags(country.flags.flags.png)

    }

    return (
        <div className={`flags ${visited?'country-visited':'not visited'}`   }>
            <img src={country.flags.flags.png} alt="" /> 
            <h1>name:{country.name.common}</h1>
            <p>Population : {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area>300000? "Big Country": "Small Country"} </p>
            
            <button onClick={handaler}>
              {visited? 'visited':'not visited' } 
                </button>
                <button onClick={handalerflags}>visited flags</button>
        </div>
    );
};

export default Country;
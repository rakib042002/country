import React, { useEffect, useState } from 'react';
import '../Country/country.css';
import Population from '../Population/Population';

const Country = () => {
    const [country, setcountry] = useState([]);
    const [total, setTotal] = useState(0)

    const totalPeople = (people)=>{
        setTotal(total+people.population)
    }
    
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => setcountry(data))
        .catch( error =>console.log(error))
    }, [])
    return (
        <div>
            <div className="topBar">
            <h5>Total Country{country.length}</h5>
            <h5>Total Population {total}</h5>
            </div>
            <div className="about">
            {
                   country.map(country =>  <Population country={country}  totalPeople = {totalPeople} key={country.name}> </Population> )
               }
            </div>
        
        </div>
    );
};

export default Country;
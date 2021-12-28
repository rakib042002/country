import React from 'react';

const Population = (props) => {
    const  {name , flag , population} = props.country;
    return (
        <div>
                            <img src={flag} alt="Flag" />
                            <h4>Name: {name }</h4>
                            <h3>Population: {population}</h3>
                            <button onClick={()=>props.totalPeople(props.country)}>Add button</button>
        </div>
    );
};

export default Population;
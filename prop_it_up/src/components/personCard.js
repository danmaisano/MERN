import React from 'react';

const Person = (props) => {
    const {lastName, firstName, age, hair} = props
    return (
        <div className = "App">
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { hair }</p>
        </div>

    )
}

export default Person
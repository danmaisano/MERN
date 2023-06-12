import React, {useState} from 'react';

const Person = (props) => {
    const {lastName, firstName, hair} = props
    const [age, setAge] = useState(props.initialAge);
    return (
        <div className = "App">
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { hair }</p>
            <button onClick = {(event) => setAge(age+1)}>Birthday Time!</button>
        </div>

    )
}

export default Person
import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';

const Number = (props) => {
    const {num} = useParams();

    return(
        <div>
            <h2>Your number is: {num}</h2>
            <Link to ="/">Go Home</Link>
        </div>
    )
}

export default Number;
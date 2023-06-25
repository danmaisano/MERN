import React, {useState} from 'react';
import { useParams, Link} from 'react-router-dom';


const Word = (props) => {
    const {word} = useParams();

    return(
        <div>
            <h2>Your word is: {word} </h2>
            <Link to ="/">Go Home</Link>
        </div>
    )
}

export default Word;
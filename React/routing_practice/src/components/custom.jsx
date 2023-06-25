import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';

const Custom = (props) => {
    const {customWord} = useParams();
    const {customColor} = useParams();
    const {customBG} = useParams();
    
    const customStyle = {
        color: customColor,
        backgroundColor: customBG,
    };

    return(
        <div>
            <h2 style={customStyle}>Your custom word is: {customWord}</h2>
        </div>
    )
}

export default Custom;
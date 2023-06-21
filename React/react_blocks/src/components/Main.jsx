import React, {useState} from 'react';

const Main = (props) => {


    return(
        <div className='main'>
            {props.children}
        </div>
    )
}

export default Main;
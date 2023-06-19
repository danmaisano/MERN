import React from 'react';


const ShowBoxes = (props) => {
    return (
        <div className='boxArea'>
        {props.boxes.map((box, index) => (
            <div className = "boxes" key={index} style={{ backgroundColor: box.boxColor, width: box.boxSize +"px", height: box.boxSize +"px"}}></div>
        ))}
        </div>
    );
};

export default ShowBoxes;

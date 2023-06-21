import React, {useState} from 'react';

const CreateBoxes = (props) => {
    const [colorError, setColorError] = useState("")
    const [sizeError, setSizeError] = useState("")
    
    const addNewBox = (e) => {
        e.preventDefault();
        if (props.boxColor.length < 1){
            setColorError("Color cannot be blank");
            return;
        }
        if (props.boxSize.length <1){
            setSizeError("Size cannot be blank");
            return;
        }
        
        const newBox = {boxColor:props.boxColor, boxSize:props.boxSize};
        props.newBox(newBox);
        setColorError("");
        setSizeError("");
        props.setBoxColor("");
        props.setBoxSize("");
    }
    
    const clearBoxes = (e) => {
        e.preventDefault();
        props.setBoxes([]);
    }

    return(
        <div>
            <form onSubmit={addNewBox}>
                <label htmlFor="boxColor">Choose a Color: </label>
                <input type="text" name="boxColor" id="boxColor" value={props.boxColor} onChange ={ (e) => props.setBoxColor(e.target.value)}/>
                <p>{ colorError }</p>
                <label htmlFor="boxSize">What Size of Box?: </label>
                <input type="number" name="boxSize" id="boxSize" value={props.boxSize} onChange ={ (e) => props.setBoxSize(e.target.value)}/>
                <p>{ sizeError }</p>
                <button className = "myBoxes">Add Box</button>
            </form>
            <form onSubmit={ clearBoxes }>
                <button className = "myBoxes">Clear All Boxes</button>
            </form>
        </div>
    )
}

export default CreateBoxes; 
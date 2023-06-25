import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = (props) => {
    const [num, setNum] = useState(0)
    const [word, setWord] = useState("")
    const navigate = useNavigate();
    const [customWord, setCustomWord] = useState("")
    const [customColor, setCustomColor] = useState("")
    const [customBG, setCustomBG] = useState("")

    const submitNum = () => {
        const inputNum = document.getElementById("num").value;
        setNum(inputNum);
        navigate("/number/" + inputNum);
    };

    const submitWord = () => {
        const inputWord = document.getElementById("word").value;
        setWord(inputWord);
        navigate("/word/" + inputWord);
    }

    const submitCustom = () => {
        const customWord = document.getElementById("customWord").value;
        const customColor = document.getElementById("customColor").value;
        const customBG = document.getElementById("customBG").value;
        setCustomWord(customWord)
        setCustomColor(customColor)
        setCustomBG(customBG)
        navigate(`/custom/${customWord}/${customColor}/${customBG}`)
        
    }

    return(
        <div>
            <h1>This is the Home Page</h1>
            {/* <label htmlFor="Number">Pick a Number:</label>
            <input type="number" id="num"/>
            <button onClick={submitNum}>Submit</button>
            <label htmlFor="Word">Say a Word:</label>
            <input type="text" id="word"/>
            <button onClick={submitWord}>Submit</button>
            <hr></hr> */}
            <form onSubmit={submitCustom}>
                <label htmlFor="customWord">Pick a Word</label>
                <input type="text" id="customWord"/>
                <br></br>
                <label htmlFor="customColor">Pick a Color</label>
                <input type="text" id= "customColor" />
                <br></br>
                <label htmlFor="customBG">Pick a Background Color</label>
                <input type="text" id="customBG" />
                <br></br>
                <button>Submit Custom Word</button>
            </form>

        </div>
    )
}

export default Home;
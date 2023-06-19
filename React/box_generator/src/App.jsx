import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateBoxes from './components/newBoxes'
import ShowBoxes from './components/showBoxes'

function App() {
  const [boxes, setBoxes] = useState([]);
  const [boxSize, setBoxSize] = useState(0);
  const [boxColor, setBoxColor] = useState("");

  const newBoxAdded = ( newBox ) => {
    setBoxes([...boxes,newBox]);
  }

  return (
    <>
      <CreateBoxes
      boxColor = {boxColor}
      setBoxColor = {setBoxColor}
      boxSize = {boxSize}
      setBoxSize = {setBoxSize}
      setBoxes = {setBoxes}
      newBox = { newBoxAdded } />
      <ShowBoxes boxes = { boxes } />
    </>
  )
}

export default App

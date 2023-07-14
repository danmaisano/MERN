import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import axios from "axios"
import './App.css'
import Dashboard from './views/Dashboard'
import PlayerStatusGame from './views/PlayerStatusGame'
import AddPlayer from './views/AddPlayer'
import UpdatePlayer from './views/UpdatePlayer'

function App() {
  const [playerList, setPlayerList] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  const deletePlayer = (playerId) => {
        setPlayerList(playerList.filter((player) => player._id !== playerId))
  }


  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
      .then((res) => {setPlayerList(res.data); console.log("Dom Updated")})
      .catch((err) => res.json({message: "Something went wrong!", error: err}))
  },[]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard playerList = {playerList} setPlayerList = {setPlayerList} deletePlayer = {deletePlayer}/>}/>
          <Route path="/players/manage/:gameId" element={<PlayerStatusGame playerList = {playerList} setPlayerList = {setPlayerList} selectedPlayer = {selectedPlayer}/>}/>
          <Route path="/players/add" element={<AddPlayer playerList = {playerList} setPlayerList = {setPlayerList}/>}/>
          <Route path="/players/update/:id" element={<UpdatePlayer playerList = {playerList} setPlayerList = {setPlayerList}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"


const AddPlayer = (props) => {
    const {playerList, setPlayerList} = props
    const [name, setName] = useState("")
    const [preferred_position, setPreferred_position] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if(name.length < 2){
            setErrors("Name must be at least two characters")
            return
        }
        axios
        .post("http://localhost:8000/api/players", {name, preferred_position})
        .then((res) => {
            setPlayerList([...playerList, res.data])
            setName("")
            setPreferred_position("")
            navigate('/')
        })
        .catch((err) => {
            err.response.data.errors ? setErrors(err.response.data.errors): ""
            });
    }

    return(
        <div>
            <div className="container">
                <div className="text-start text-decoration-underline text-primary link-list">
                    <h3><Link className="tableLink" to="/">Player List</Link></h3>
                    <h3>|</h3>
                    <h3><Link className="tableLink" to="/players/manage/game1">Manage Player Status</Link></h3>
                </div>
                <div className="border border-dark text-start p-3">
                    <h3>Add Player</h3>
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="player_name" className="form-label">Player Name</label>
                            {errors.name && <p className="text-danger">{errors.name.message}</p>}
                            <p className="text-danger">{errors}</p>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="player_name"
                            value={name}
                            onChange ={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="preferred_position" className="form-label">Preferred Position</label>
                            <select
                            className="form-control" 
                            id="preferred_position"
                            value={preferred_position}
                            onChange ={(e)=>setPreferred_position(e.target.value)}>
                                <option value=""></option>
                                <option value="Attack">Attack</option>
                                <option value="Midfielder">Midfielder</option>
                                <option value="Defense">Defense</option>
                                <option value="Goalie">Goalie</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                </div>
                
            </div>
        </div>
    )
}

export default AddPlayer;
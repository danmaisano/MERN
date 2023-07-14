import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from "axios"


const UpdatePlayer = (props) => {
    const {playerList, setPlayerList} = props
    const [name, setName] = useState("")
    const [preferred_position, setPreferred_position] = useState("")
    const [loaded, setLoaded] = useState(false);
    const [player, setPlayer] = useState({})
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect (() => {
        axios
        .get("http://localhost:8000/api/players/" + id)
        .then(res => {
            setName(res.data.name)
            setPreferred_position(res.data.preferred_position)
            setLoaded(true)
        })
        .catch((err) => res.json({message: "Something went wrong!", error: err}))
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        if (name.length < 2) {
            setErrors("Name must be at least two characters");
            return;
        }
        axios
            .patch(`http://localhost:8000/api/players/${id}`, { name, preferred_position })
            .then((res) => {
            const updatedPlayer = res.data;
            setPlayerList((prevPlayerList) => {
                const updatedList = prevPlayerList.map((player) =>
                player._id === updatedPlayer._id ? updatedPlayer : player
                );
                return updatedList;
            });
            navigate('/');
        })
        .catch((err) => {
            err.response.data.errors ? setErrors(err.response.data.errors) : "";
        });
    };

    return(
        loaded && <div>
            <div className="container">
                <div className="text-start text-decoration-underline text-primary link-list">
                    <h3><Link className="tableLink" to="/">Player List</Link></h3>
                    <h3>|</h3>
                    <h3><Link className="tableLink" to="/player/add">Add Player</Link></h3>
                    <h3>|</h3>
                    <h3><Link className="tableLink" to="/player/manage">Manage Player Status</Link></h3>
                </div>
                <div className="border border-dark text-start p-3">
                    <h3>Update Player</h3>
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

export default UpdatePlayer;
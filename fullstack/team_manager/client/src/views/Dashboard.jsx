import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import DeleteButton from '../components/Delete';

const Dashboard = (props) => {
    const {playerList, setPlayerList, deletePlayer} = props;

    return(
        <div>
            <div className="container">
                <div className="text-start text-decoration-underline text-primary link-list">
                    <h3><Link className="tableLink" to="/players/add">Add Player</Link></h3>
                    <h3>|</h3>
                    <h3><Link className="tableLink" to="/players/manage/game1">Manage Player Status</Link></h3>
                </div>
                <table className="table table-striped table-hover table-group-divider align-middle border border-dark table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Preferred Position</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playerList.map((player) => {
                            return(
                                <tr key={player._id}>
                                    <td>{player.name}</td>
                                    <td>{player.preferred_position}</td>
                                    <td className="d-flex justify-content-center">
                                        <Link to={`/players/update/${player._id}`}> 
                                        <button className="btn btn-warning btn-sm">
                                            Edit
                                        </button>
                                        </Link>
                                        <DeleteButton playerId={player._id} onDelete={deletePlayer} />
                                    </td>


                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;
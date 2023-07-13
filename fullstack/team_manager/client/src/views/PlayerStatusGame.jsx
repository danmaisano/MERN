import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const PlayerStatusGame = (props) => {
  const { playerList, setPlayerList } = props;
  const { gameId } = useParams();

  useEffect (() => {
    axios
    .get("http://localhost:8000/api/players")
    .then((res)=>{setPlayerList(res.data)})
    .catch((err) => res.json({message: "Something went wrong!", error: err}))        
  }, [playerList]);

  const updateStatus = (playerId, status, gameId) => {
    const updateData = {
      gameId,
      status,
      playerId
    };
    axios
      .patch(`http://localhost:8000/api/players/${playerId}`, updateData)
      .then((res) => {
        const updatedPlayerList = playerList.map((player) => {
          if (player._id === playerId) {
            return { ...player, status };
          }
          return player;
        });
        setPlayerList(updatedPlayerList);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="container">
          <h2 className="text-start">Player Status for {gameId}</h2>
        <div className="text-start text-decoration-underline text-primary link-list">
        </div>
        <div className="d-flex justify-content-center mt-3">
          <h4><Link className="mx-2 text-decoration-underline" to="/players/manage/game1">Game 1</Link></h4>
          <h4>|</h4>
          <h4><Link className="mx-2 text-decoration-underline" to="/players/manage/game2">Game 2</Link></h4>
          <h4>|</h4>
          <h4><Link className="mx-2 text-decoration-underline" to="/players/manage/game3">Game 3</Link></h4>
        </div>
        <table className="table table-striped table-hover table-group-divider align-middle border border-dark table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {playerList.map((player) => (
              <tr key={player._id}>
                <td>{player.name}</td>
                <td>
                  <button
                    className={`btn ${player[gameId] === 'Playing' ? 'btn-primary' : 'btn-outline-dark'} mx-2`}
                    onClick={() => updateStatus(player._id, 'Playing', gameId)}
                  >
                    Playing
                  </button>
                  <button
                    className={`btn ${player[gameId] === 'Not Playing' ? 'btn-danger' : 'btn-outline-dark'} mx-2`}
                    onClick={() => updateStatus(player._id, 'Not Playing', gameId)}
                  >
                    Not Playing
                  </button>
                  <button
                    className={`btn ${player[gameId] === 'Undecided' ? 'btn-secondary' : 'btn-outline-dark'} mx-2`}
                    onClick={() => updateStatus(player._id, 'Undecided', gameId)}
                  >
                    Undecided
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-dark">
          <Link className="text-light" to="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
};

export default PlayerStatusGame;

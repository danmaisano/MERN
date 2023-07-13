const Player = require("../models/player.model");

module.exports.getAllPlayers = (req, res) => {
  Player.find()
    .then((allPlayers) => res.json(allPlayers))
    .catch((err) => res.json({ message: "Something went wrong!", error: err }));
};

module.exports.getOnePlayer = (req, res) => {
  Player.findById(req.params.id)
    .then((player) => res.json(player))
    .catch((err) => res.json({ message: "Something went wrong!", error: err }));
};

module.exports.createPlayer = (req, res) => {
  Player.create(req.body)
    .then((newPlayer) => {
      res.json(newPlayer);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.deletePlayer = (req, res) => {
  Player.findByIdAndDelete(req.params.id)
    .then((res) => res.json(res))
    .catch((err) => res.json({ message: "Something went wrong!", error: err }));
};

module.exports.updatePlayer = (req, res) => {
  const updateData = {
    [req.body.gameId]: req.body.status,
    name: req.body.name,
    preferred_position: req.body.preferred_position,
  };
  Player.findByIdAndUpdate(req.params.id, updateData, { new: true })
    .then((player) => res.json(player))
    .catch((err) => res.status(400).json(err));
};

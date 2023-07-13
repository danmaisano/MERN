const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
  app.get("/api/players", PlayerController.getAllPlayers);
  app.get("/api/players/:id", PlayerController.getOnePlayer);
  app.post("/api/players", PlayerController.createPlayer);
  app.patch("/api/players/:id", PlayerController.updatePlayer);
  app.delete("/api/players/:id", PlayerController.deletePlayer);
};

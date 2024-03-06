const { trainer , GetTrainer , DeleteTrainer } = require("./coach.control");
const express =require("express");

const trainerrouter = express.Router();
trainerrouter.get("/trainer",GetTrainer);
trainerrouter.post("/addtrainer",trainer);
trainerrouter.delete("/remove/:id",DeleteTrainer);

module.exports = trainerrouter;
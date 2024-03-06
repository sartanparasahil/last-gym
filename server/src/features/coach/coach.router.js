const { trainer , GetTrainer } = require("./coach.control");
const express =require("express");

const trainerrouter = express.Router();
trainerrouter.get("/trainer",GetTrainer);
trainerrouter.post("/addtrainer",trainer);

module.exports = trainerrouter;

const { trainer, GetTrainer, DeleteTrainer } = require("./coach.control");
const express = require("express");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/') // The directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) // Rename file with original name and timestamp
    }
  });


  const upload = multer({ storage: storage });
  

const trainerrouter = express.Router();
trainerrouter.get("/trainer", GetTrainer);
trainerrouter.post("/addtrainer",upload.single('image'), trainer);
trainerrouter.delete("/remove/:id", DeleteTrainer);

module.exports = { trainerrouter , upload };
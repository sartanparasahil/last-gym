const express = require("express");
const planModel = require("./plans.model");
const app = express.Router();
const {plan,DeletePlan} = require("./plan.control");
const { upload } = require("../coach/coach.router");

app.get("/", async (req, res) => {
  try {
    let data = await planModel.find();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.post("/addplan",upload.single("image"),plan);

app.delete("/remove/:id",DeletePlan)

module.exports = app;

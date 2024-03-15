const express = require("express");
const planModel = require("./plans.model");
const app = express.Router();
const { plan, DeletePlan } = require("./plan.control");
const { upload } = require("../coach/coach.router");

app.get("/", async (req, res) => {
  try {
    let data = await planModel.find();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.get('/:id', async (req, res) => {

  try {
    let data = await planModel.findById(req.params.id);
    console.log(data)
    return res.status(200).json({ success: true, data: data });
  } catch (er) {
    return res.status(404).send(er.message);
  }
});


app.put('/:id', async (req, res) => {
  const {name,desc,duration} = req.body;
  const id =  req.params.id;
  await planModel.findByIdAndUpdate(id,{name,duration,desc});

  return res.status(200).json({ message: "Plan Updated SuccessFully.....",success: true });


  })
app.post("/addplan", upload.single('image') , plan);

app.delete("/remove/:id", DeletePlan)

module.exports = app;

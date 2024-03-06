const mongoose = require("mongoose");
const file = {
  name: String,
  image: String,
  desc: String,
  duration: String,
  
};
const planSchema = new mongoose.Schema(file, { versionKey: false });
const planModel = mongoose.model("plan", planSchema);
module.exports = planModel;

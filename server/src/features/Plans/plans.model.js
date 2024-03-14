const mongoose = require("mongoose");
const file = {
  name: {
    type : String,
    require : true
  },
  image: {
    type : String , 
    require : true
  },
  desc: {
    type : String ,
    require : true
  },
  duration: { 
    type : String,
    require : true
  },
  


};
const planSchema = new mongoose.Schema(file, { timestamps: true });
const planModel = mongoose.model("plan", planSchema);
module.exports = planModel;

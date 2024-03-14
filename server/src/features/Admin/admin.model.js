const mongoose = require("mongoose");

const adminschema = mongoose.Schema({
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{ timestamps:true })

const adminmodel = mongoose.model("ADMIN",adminschema);

module.exports = adminmodel;
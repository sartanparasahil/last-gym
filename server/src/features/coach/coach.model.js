const mongoose = require("mongoose");

const trainerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    // gender:{
    //     type:String,
    //     required:true,
    //     enum:["male","female","other"]
    // }
},
{ timestamps:true })

const trainermodel = mongoose.model("trainer",trainerSchema);

module.exports = trainermodel;
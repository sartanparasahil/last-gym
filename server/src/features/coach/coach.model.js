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
        type:Array,
        required:true
    },
    experiance:{
        type:String,
        required:true
    },
    active: {
        type: Boolean,
        default: false
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
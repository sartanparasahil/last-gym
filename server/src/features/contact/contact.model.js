const mongoose = require("mongoose");

const contactschema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},
{ timestamps:true })

const contactmodel = mongoose.model("contact",contactschema);
module.exports = contactmodel;
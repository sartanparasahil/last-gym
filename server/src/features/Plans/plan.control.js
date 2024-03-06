const planModel = require("./plans.model");

const plan = async ( req , res ) =>{
    const{ name , image , desc , type , gender , duration , qty , price } = req.body;
    const namechk = await planModel.findOne({name});
    if(!(name && image && desc && type && gender && duration && qty && price)){
        return res.status(400).json({message:"All Fileds Are Required"});
    }
    if(namechk){
        return res.status(400).json({message:"PlanName Already Exists"});
    }
    const newplan = await new planModel({ name , image , desc , type , gender , duration , qty , price });
    newplan.save();
    return res.status(200).json({message:"Plan Added SuccessFully",data:newplan});
}

module.exports = plan;
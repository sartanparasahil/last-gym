const trainermodel = require("./coach.model");

const trainer = async ( req , res ) => {
    const{ name , email , image , gender } = req.body;
    const emailchk = await trainermodel.findOne({email});

    if(!( name && email && image && gender )){
        return res.status(400).json({message:"All Fileds Are Required"});
    }
    if(emailchk){
        return res.status(400).json({message:"Email Is Already Exists"});
    }
    const newtrainer =  new trainermodel({ name , email , image , gender });
    await newtrainer.save();
    return res.status(200).json({message:"Trainer Added SuccessFully.....",data:newtrainer});
}

const GetTrainer = async ( req , res ) => {
    const Data = await trainermodel.find();
    return res.status(200).json(Data);
}

module.exports = { trainer , GetTrainer };
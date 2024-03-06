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

const DeleteTrainer = async ( req , res ) =>  {
    const id = req.params.id;
    try {
        const isvalidtrainer = await trainermodel.findOne({id});
        if(isvalidtrainer){
            await trainermodel.findByIdAndDelete(id);
            return res.status(200).json({ message: "Trainer Deleted SuccessFully....." });
        }
        return res.status(400).json({message:"Id Is Not Found"});
    } catch (error) {
        return res.status(500).json({message:"Server Failed!"});        
    }
}

module.exports = { trainer , GetTrainer , DeleteTrainer };
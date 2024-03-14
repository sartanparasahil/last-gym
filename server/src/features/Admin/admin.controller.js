const adminmodel = require("./admin.model");

const GetAdmin = async (req, res) => {
    try {
        const Data = await adminmodel.find();
        return res.status(200).json(Data);
    } catch (error) {
        return res.status(500).json({ message: "Server Failed!" });
    }
}

const login = async(req,res)=>{
    try {
        if(!(email && password)){
            return res.status(400).json({message:"All Fileds Are Required"});
        }
        const emailchk = await adminmodel.findOne({email});
        if(!emailchk){
           return res.status(400).json({message:"Wrong Email"});
        }
        const passchk = await adminmodel.findOne({password});
        if(!passchk){
           return res.status(400).json({message:"Password Incorrect"});
        }
        return res.status(200).json({message:"Login SuccessFully....."});
    } catch (error) {
        return res.status(500).json({message:"Server Failed!"});
    }
}

module.exports = { GetAdmin , login };
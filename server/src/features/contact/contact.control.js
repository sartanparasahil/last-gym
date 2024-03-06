const contactmodel = require("./contact.model")

const contact = async ( req , res ) => {
try {
        const { username , email , description } = req.body;
        const emailchk = await contactmodel.findOne({email});
        // console.log(emailchk);
        if( username && email && description ){  
            if(emailchk){
                return res.status(400).json({message:"Please,Try With Another Email"});
            } 
            else{      
                const newcontact = await new contactmodel( { username , email , description } );
                newcontact.save();
                return res.status(200).json({message:"Your Data Send SuccessFully....",data:newcontact});
            }
        }
        else{
            return res.status(400).json({message:"All Fileds Are Required"});
        }

} catch (error) {
    return res.status(500).json({message:"Server Failed!"});
    }
}

const GetContact = async ( req , res ) => {
    try {
        const data = await contactmodel.find();
        return res.status(200).json({data});
    } catch (error) {
        return res.status(400).json({message:"Server Failed!"})
    }
}

module.exports = { contact , GetContact };

const planModel = require("./plans.model");
const { param } = require("./plans.router");

const plan = async (req, res) => {
    try {
        const { name, desc, duration, } = req.body;
        if (!(name  && desc  && duration )) {
            return res.status(400).json({ message: "All Fileds Are Required" });
        }
        if (!req.file) {
            return res.status(400).json({ message: "Please Upload Image" });
        }
        const namechk = await planModel.findOne({ name });
        
        if (namechk) {
            return res.status(400).json({ message: "Plan Already Exists" });
        }
        const newplan = await new planModel({ name,duration , image: req.file.filename});
        newplan.save();
        return res.status(200).json({ message: "Plan Added SuccessFully.....", data: newplan });
    } catch (error) {
        return res.status(500).json({message:"Server Failed!"});
    }
}

const DeletePlan = async (req, res) => {

    try {
        const id = req.params.id
        console.log(id);

        const isvalidPlan = await planModel.findById(id)

        if (isvalidPlan) {
            await planModel.findByIdAndDelete(id)
            return res.status(200).json({ message: "Plan Deleted SuccessFully....." });
        }

        return res.status(400).json({ message: "Id Is Not Found" });


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message:"Server Failed!"});
    }

}

module.exports = { plan, DeletePlan };
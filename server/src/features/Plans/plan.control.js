const planModel = require("./plans.model");
const { param } = require("./plans.router");

const plan = async (req, res) => {
    const { name, image, desc, type, gender, duration, qty, price } = req.body;
    const namechk = await planModel.findOne({ name });
    if (!(name && image && desc && type && gender && duration && qty && price)) {
        return res.status(400).json({ message: "All Fileds Are Required" });
    }
    if (namechk) {
        return res.status(400).json({ message: "PlanName Already Exists" });
    }
    const newplan = await new planModel({ name, image, desc, type, gender, duration, qty, price });
    newplan.save();
    return res.status(200).json({ message: "Plan Added SuccessFully", data: newplan });
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

        return res.status(200).json({ message: "id not found" });


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Server failed" })
    }

}

module.exports = { plan, DeletePlan };
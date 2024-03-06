const planModel = require("./plans.model");

const plan = async (req, res) => {
    console.log("run plan")
    const { name, image, desc, duration } = req.body;
    console.log(req.body)
    const namechk = await planModel.findOne({ name });
    if (!(name && image && desc && duration)) {
        return res.status(400).json({ message: "Enter Valid Data" });
    }
    if (namechk) {
        return res.status(400).json({ message: "PlanName Already Exists" });
    }

    const newplan = new planModel({ name, image, desc, duration });
    newplan.save();
    return res.status(200).json({ message: "Plan Added SuccessFully", data: newplan });
}

module.exports = plan;
const trainermodel = require("./coach.model");

const trainer = async (req, res) => {
    try {
        const { name, email, experiance } = req.body;
        console.log("run body");
        // console.log(req.file);
        // console.log(req.body)
        const emailchk = await trainermodel.findOne({ email });
        let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!(name && email && experiance)) {
            return res.status(400).json({ message: "All Fileds Are Required" });
        }
        if(!email.match(regex))
        {
            return res.status(400).json({ message: "Invalid Email!" });
        }
        if (!req.files) {
            return res.status(400).json({ message: "Please Upload Image" });
        }
        if (emailchk) {
            return res.status(400).json({ message: "Email Is Already Exists" });
        }
        const newtrainer = new trainermodel({ name, email, experiance, image: req.files });
        await newtrainer.save();
        return res.status(200).json({ message: "Trainer Added SuccessFully.....", data: newtrainer });
    } catch (error) {
        return res.status(500).json({ message: "Server Failed!" });
    }
}

const GetTrainer = async (req, res) => {
    try {
        const Data = await trainermodel.find();
        return res.status(200).send(Data);
    } catch (error) {
        return res.status(500).json({ message: "Server Failed!" });
    }
}

const DeleteTrainer = async (req, res) => {
    const id = req.params.id;
    try {
        const isvalidtrainer = await trainermodel.findById(id);
        if (!isvalidtrainer) {
            return res.status(400).json({ message: "Id Is Not Found" });

        }

        await trainermodel.findByIdAndDelete(id);
        return res.status(200).json({ message: "Trainer Deleted SuccessFully....." });
    } catch (error) {
        return res.status(500).json({ message: "Server Failed!" });
    }
}

const UpdteStatus = async (req, res) => {
    try {
        const id = req.params.id
        const user = await trainermodel.findById(id);
        user.active = !user.active;
        await user.save()

        res.status(200).json({ success: true, message: "Updated", user })
    } catch (error) {
        return res.status(500).json({ message: "Server Failed!" });
    }

};
module.exports = { trainer, GetTrainer, DeleteTrainer,UpdteStatus };
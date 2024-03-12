const trainermodel = require("./coach.model");

const trainer = async (req, res) => {
    try {
        const { name, email } = req.body;

        console.log(req.file);
        console.log(req.body)
        if (!req.file) {
            return res.status(400).json({ message: "Please Upload Image" });
        }

        const emailchk = await trainermodel.findOne({ email });

        if (!(name && email)) {
            return res.status(400).json({ message: "All Fileds Are Required" });
        }
        if (emailchk) {
            return res.status(400).json({ message: "Email Is Already Exists" });
        }
        const newtrainer = new trainermodel({ name, email, image: req.file.filename });
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

module.exports = { trainer, GetTrainer, DeleteTrainer };
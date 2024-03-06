const contactmodel = require("./contact.model")

const contact = async (req, res) => {
    try {
        const { username, email, description } = req.body;
        const emailchk = await contactmodel.findOne({ email });
        // console.log(emailchk);
        if (username && email && description) {
            if (emailchk) {
                return res.status(400).json({ message: "Please,Try With Another Email" });
            }
            else {
                const newcontact = await new contactmodel({ username, email, description });
                newcontact.save();
                return res.status(200).json({ message: "Your Data Send SuccessFully....", data: newcontact });
            }
        }
        else {
            return res.status(400).json({ message: "All Fileds Are Required" });
        }

    } catch (error) {
        return res.status(500).json({ message: "Server Failed!" });
    }
}

const GetContact = async (req, res) => {
    try {
        const data = await contactmodel.find();
        return res.status(200).send(data);
    } catch (error) {
        return res.status(400).json({ message: "Server Failed!" })
    }
}

const DeleteContact = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log("id",id)
        const isValidateContact = await contactmodel.find({ id });
        if (!isValidateContact) {
            return res.status(400).json({ message: "Contact Not Found!" });
        }
        await contactmodel.findByIdAndDelete(id);
        return res.status(200).json({ message: "Contact Deleted....." });
    } catch (error) {
        return res.status(500).json({ message: "Server Failed!" });
    }
}

module.exports = { contact, GetContact, DeleteContact };

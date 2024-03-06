const { contact, GetContact, DeleteContact } = require("./contact.control");
const express = require("express");
const contactrouter = express.Router();


contactrouter.post("/sendcontact", contact);
contactrouter.get("/getcontact", GetContact);
contactrouter.delete("/removecontact/:id", DeleteContact);

module.exports = contactrouter;
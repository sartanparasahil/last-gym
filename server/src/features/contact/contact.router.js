const { contact , GetContact } = require("./contact.control");
const express = require("express");
const contactrouter = express.Router();

contactrouter.post("/sendcontact",contact);
contactrouter.get("/getcontact",GetContact);

module.exports = contactrouter;
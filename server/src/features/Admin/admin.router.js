const { GetAdmin , login } = require("./admin.controller");
const express = require("express");

const adminrouter = express.Router();

adminrouter.get("/",GetAdmin);
adminrouter.post("/login",login);

module.exports = adminrouter;
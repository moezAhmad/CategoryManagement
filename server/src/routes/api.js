const express = require("express");

const categoriesRouter = require("./categories/categories.router");

const api = express.Router();

api.use("/categories", categoriesRouter);

module.exports = api;

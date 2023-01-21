const express = require("express");

const { httpGetAllCategories } = require("./categories.controller");

const categoriesRouter = express.Router();

categoriesRouter.get("/", httpGetAllCategories);

module.exports = categoriesRouter;

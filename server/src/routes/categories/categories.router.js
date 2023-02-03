const express = require("express");

const {
  httpGetAllCategories,
  httpPostCategory,
  httpPatchCategory,
  httpDeleteCategory,
  httpGetCategoriesCount,
} = require("./categories.controller");

const categoriesRouter = express.Router();

categoriesRouter.get("/", httpGetAllCategories);
categoriesRouter.post("/", httpPostCategory);
categoriesRouter.patch("/:id", httpPatchCategory);
categoriesRouter.delete("/:id", httpDeleteCategory);
categoriesRouter.get("/categories/count", httpGetCategoriesCount);

module.exports = categoriesRouter;

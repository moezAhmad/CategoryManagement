const express = require("express");

const { httpGetProductsCount } = require("./products.controller");

const productsRouter = express.Router();

productsRouter.get("/products/count", httpGetProductsCount);

productsRouter.post("/products", httpPostProduct);
module.exports = productsRouter;

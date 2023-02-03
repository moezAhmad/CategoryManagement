const express = require("express");

const {
  httpGetProductsCount,
  httpPostProduct,
  httpGetProductsByName,
  httpGetProductsByCategoryId,
  httpRemoveImageFromProduct,
  httpPutProduct,
  httpDeleteProduct,
} = require("./products.controller");

const productsRouter = express.Router();

productsRouter.get("/products/count", httpGetProductsCount);
productsRouter.post("/products", httpPostProduct);
productsRouter.get("/products/:name", httpGetProductsByName);
productsRouter.get("/products/:categoryId", httpGetProductsByCategoryId);
productsRouter.delete(
  "/products/:productId/images/:imageURL",
  httpRemoveImageFromProduct
);
productsRouter.put("/products/:productId", httpPutProduct);
productsRouter.delete("/products/:productId", httpDeleteProduct);

module.exports = productsRouter;

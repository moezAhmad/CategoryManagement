const Product = require("../../models/products/products.mongo");

// Get Products count
async function httpGetProductsCount(req, res) {
  try {
    const totalProducts = Product.countDocuments();
    res.json({ totalProducts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function httpPostProduct(req, res) {
  try {
    const { name, type, category, price } = req.body;
    if (!name || !type || !category || !price) {
      throw new Error("Missing required fields");
    }
    const product = new Product({
      name,
      type,
      category,
      price,
    });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

async function httpGetProductsByName(req, res) {
  try {
    const name = req.params.name;
    const products = await Product.find({ name });
    if (!products) {
      throw new Error("Product not found");
    }
    res.send(products);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
}
async function httpGetProductsByCategory(req, res) {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });
    if (!products) {
      throw new Error("No products found for the given category");
    }
    res.send(products);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
}

module.exports = {
  httpGetProductsCount,
  httpPostProduct,
  httpGetProductsByName,
  httpGetProductsByCategory,
};

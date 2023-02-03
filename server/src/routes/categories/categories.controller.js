const Category = require("../../models//categories/categories.mongo");

// Get categories count
async function httpGetCategoriesCount(req, res) {
  try{
    const totalCategories = Category.countDocuments();
    res.json({totalCategories})
  }catch(err){
    res.status(500).json({ message: err.message });
  }
  
};


// Get all categories
async function httpGetAllCategories(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalCategories = await Category.countDocuments();
    const categories = await Category.find().skip(skip).limit(limit);
    
    res.json({ categories, totalCategories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Create a new category
async function httpPostCategory(req, res) {
  const newCategory = new Category({
    name: req.body.name,
  });
  try {
    await newCategory.save();
    res.status(201).json({ message: "Category created successfully." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Update a category
async function httpPatchCategory(req, res) {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Delete a category
async function httpDeleteCategory(req, res) {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Category deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  httpGetCategoriesCount,
  httpGetAllCategories,
  httpPostCategory,
  httpPatchCategory,
  httpDeleteCategory,
};

// const { getAllCategories } = require('../../models/planets.model');

async function httpGetAllCategories(req, res) {
  return res.status(200).json("Categories");
}

module.exports = {
  httpGetAllCategories,
};

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model("category", categorySchema);

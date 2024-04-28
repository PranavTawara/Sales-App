const mongoose = require("mongoose");

// Create a Mongoose schema and model for sales
const saleSchema = new mongoose.Schema({
    productName: String,
    quantity: Number,
    saleAmount: Number,
});

mongoose.model("Sale", saleSchema);
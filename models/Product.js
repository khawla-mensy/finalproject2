const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const productSchema = new Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    prix: { type: String },
    comments: { type: Array, default: [] },
});

module.exports = Product = model("product", productSchema);

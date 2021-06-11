const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    clientId: String,
    products: Array,
    totalPrice: String,
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Order", orderSchema);

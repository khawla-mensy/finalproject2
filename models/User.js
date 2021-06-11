const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: Number,
    isAdmin: { type: Boolean, default: false },
    cart: { type: Array, default: [] },
    order: [],
    infoCom: [],
    date: { type: Date, default: Date.now() },
});

module.exports = User = model("user", userSchema);

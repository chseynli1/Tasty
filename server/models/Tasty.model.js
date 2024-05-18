const { default: mongoose } = require("mongoose");

const Tasty = mongoose.model("Tasty", new mongoose.Schema({
    image: String,
    name: String,
    composition: String,
    price: Number
}))

module.exports = { Tasty }
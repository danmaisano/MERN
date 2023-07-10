const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        requried: [true, "Product needs a title"]
    },
    price: {
        type: Number,
        required: [true, "Product needs a price"]
    },
    description: {
        type: String,
        required: false
    }
},{timestamps: true});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
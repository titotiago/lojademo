const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    value: String,
    key: String,
    imgUrl: String,
    Stock: String
})

module.exports = mongoose.model('Product', ProductSchema)
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const ProductsModel = mongoose.model('icProducts', productSchema);



module.exports = ProductsModel;
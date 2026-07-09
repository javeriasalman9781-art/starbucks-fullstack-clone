const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    itemName: { type: String, required: true },
    itemImg: { type: String },
    calories: { type: String },
    price: { type: Number }, 
    dateAdded: { type: Date, default: Date.now }
});


module.exports = mongoose.model('cart', CartSchema);



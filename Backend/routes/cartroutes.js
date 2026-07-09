const express = require('express');
const router = express.Router();
const cart = require('../models/cart'); 

router.post('/add', async (req, res) => {
    try {
        const newItem = new cart(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/:userName', async (req, res) => {
    try {
        
        const items = await cart.find({ userName: req.params.userName });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.delete('/remove/:userName/:itemName', async (req, res) => {
    try {
        const deletedItem = await cart.findOneAndDelete({ 
            userName: req.params.userName, 
            itemName: req.params.itemName 
        });
        
        if (deletedItem) {
            res.status(200).json({ message: "Item removed" });
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
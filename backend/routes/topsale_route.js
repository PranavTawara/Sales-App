const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Sale = mongoose.model("Sale");

// Endpoint to get top sales
router.get('/topsales', async (req, res) => {
    try {
        const topSales = await Sale.find().limit(5).sort({ saleAmount: -1 });
        res.json(topSales);
    } catch (error) {
        console.error('Error fetching top sales:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to add a new sale
router.post('/addsales', async (req, res) => {
    const { productName, quantity, saleAmount } = req.body;

    try {
        const newSale = new Sale({
            productName,
            quantity,
            saleAmount,
        });

        await newSale.save();
        res.json(newSale);
    } catch (error) {
        console.error('Error adding sale:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Endpoint to get total revenue
router.get('/totalrevenue', async (req, res) => {
    try {
        const topSales = await Sale.find();
        const totalRevenue = topSales.reduce((acc, sale) => acc + sale.quantity * sale.saleAmount, 0);
        res.json({ totalRevenue });
    } catch (error) {
        console.error('Error fetching total revenue:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = router;
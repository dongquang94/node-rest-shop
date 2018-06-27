const express = require('express');
const router = express.Router();

// Handle incoming GET to /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Orders were fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId : req.body.productId,
        quantity : req.body.quantity
    };
    res.status(201).json({
        message : 'Order was created',
        order : order
    });
});

router.get('/:OrderId', (req, res, next) => {
    res.status(200).json({
        message : 'Order details',
        orderId : req.params.orderId
    });
});

router.delete('/:OrderId', (req, res, next) => {
    res.status(200).json({
        message : 'Order deleted',
        orderId : req.params.orderId
    });
});

module.exports = router;
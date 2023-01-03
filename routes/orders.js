const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController')

/* GET users listing. */
router.post('/', function(req, res, next) {
        orderController.postNewOrder(req, res);
});
router.get('/:id', function(req, res, next) {
        orderController.getTotalPriceQuantOfUser(req, res)
});

module.exports = router;

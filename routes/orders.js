const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController')

/* GET users listing. */
router.get('/', function(req, res, next) {
    orderController.postNewOrder(req, res);
});

module.exports = router;

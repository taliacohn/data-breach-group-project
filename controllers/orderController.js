const db = require("../database/database");


exports.postNewOrder = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    const user_id = req.body.user_id;
    const product_name = req.body.product_name;
    const quantity = req.body.quantity;

    const result = db.newOrder(user_id, product_name, quantity)
    res.status(200).json({
        status: 'success',
        data: {
            result
        }
    })
};

exports.getTotalPriceQuantOfUser = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    const user_id = req.params.id;
    const result = db.totalPriceQuantOfUser(user_id)
    res.status(200).json({
        status: 'success',
        data: {
            result
        }
    })
};


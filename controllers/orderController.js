const db = require("../database/database");


exports.postNewOrder = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    const user_id = req.body.user_id;
    const product_name = req.body.product_name;
    const quantity = req.body.quantity;
    const total_price = 2.78 * +quantity;

    await db.query(`insert into orders values (default, ${user_id}, ${product_name}, curdate(), ${total_price}, ${quantity}, 2.78);`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    result
                }
            })

        }
    })
};

exports.getTotalPriceQuantOfUser = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    const user_id = req.params.id;
    await db.query(`select SUM(total_price) as 'total', SUM(quantity) as 'quantity' from orders where user_id=${user_id};`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    result
                }
            })

        }
    })
};


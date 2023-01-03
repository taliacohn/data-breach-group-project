const db = require("../database/database");


exports.postNewOrder = async (req, res) => {
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


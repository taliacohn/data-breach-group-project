const db = require('../database/database');
const {router} = require("express/lib/application");


exports.getUserAccountExistence = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    const email = req.query.email;
    await db.query(`SELECT * FROM users WHERE email='${email}';`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            if (result.length > 0 ) {
                res.status(200).json({
                    status: 'success',
                    data: {
                        data: result[0]
                    }
                })
            } else {
                res.status(404).json({
                    status: 'fail',
                    data: 'User doesn\'t exist'
                })
            }
        }
    })
};

exports.getUserNameExistence = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    const name = req.query.name;
    await db.query(`SELECT * FROM users WHERE username='${name}';`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            if (result.length === 0 ) {
                res.status(200).json({
                    status: 'success',
                    data: 'This name is free to use'
                })
            } else {
                res.status(404).json({
                    status: 'fail',
                    data: 'User with this name already exists'
                })
            }

        }
    })
};

exports.postLoginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    res.header("Access-Control-Allow-Origin", "*")
    await db.query(`SELECT * FROM users WHERE email='${email}' AND password='${password}';`, (err, result) => {

        if (err) {
            console.log(err)
        } else {
            if (result.length) {
                res.status(200).json({
                    status: 'success',
                    data: {
                        result
                    }
                })
            } else {
                res.status(203).json({
                    status: 'access forbidden',
                    data: {
                        access: 'forbidden'
                    }
                })
            }
        }
    })
};

exports.postChangeUserData = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.username;
    res.header("Access-Control-Allow-Origin", "*")
    await db.query(`UPDATE users SET password='${password}' username='${name}' WHERE email='${email}';`, (err, result) => {

        if (err) {
            console.log(err)
        } else {
            if (result.length) {
                res.status(200).json({
                    status: 'success',
                    data: {
                        result
                    }
                })
            } else {
                res.status(203).json({
                    status: 'access forbidden',
                    data: {
                        access: 'forbidden'
                    }
                })
            }
        }
    })
};


exports.getUsersOrdersAll = async (req, res) => {
    const user_id = req.params.id;
    res.header("Access-Control-Allow-Origin", "*")
    await db.query(`SELECT * FROM orders WHERE user_id=${user_id};`, (err, result) => {

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
exports.getUsersOrderByProductName = async (req, res) => {
    const user_id = req.query.id;
    const product_name = req.query.name;
    res.header("Access-Control-Allow-Origin", "*")
    await db.query(`SELECT * FROM orders WHERE user_id=${user_id} AND product_name LIKE '%${product_name}%';`, (err, result) => {

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



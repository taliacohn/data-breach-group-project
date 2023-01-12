const db = require('../database/database');
const {router} = require("express/lib/application");


exports.getUserAccountExistence = async (req, res) => {
    const email = req.query.email;
    const result = await db.accountExistence(email)
    if (result.id) {
        res.status(200).json({
            status: 'success',
            data: {
                result
            }
        })
    } else {
        res.status(404).json({
            status: 'fail',
            data: 'User doesn\'t exist'
        })
    }
};

exports.getUserNameExistence = async (req, res) => {
    const name = req.query.name;
    const result = await db.usernameExistence(name)
    if (result.length === 0) {
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
};

exports.postLoginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const result = await db.loginUser(email, password);
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
};

exports.postChangeUserData = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.username;
    const result = db.changeUserData(name, password, email);
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
};


exports.getUsersOrdersAll = async (req, res) => {
    const user_id = req.params.id;
    const result = db.userOrders(user_id)
    res.status(200).json({
        status: 'success',
        data: {
            result
        }
    })
};

exports.getUsersOrderByProductName = async (req, res) => {
    const user_id = req.query.id;
    const product_name = req.query.name;
    const result = db.searchUserOrderByString(user_id, product_name);
    res.status(200).json({
        status: 'success',
        data: {
            result
        }
    })
};



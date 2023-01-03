const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  if(req.query.email && req.method === 'GET'){
    userController.getUserAccountExistence(req,res)
  }else if(req.query.name){
    userController.getUserNameExistence(req, res)
  }else if(req.query.email && req.method === 'POST'){
    userController.postLoginUser(req, res)
  }else if(req.query.email && req.method === 'PUT'){
    userController.postChangeUserData(req,res);
  }else if(req.query.id && req.query.orders){
    userController.getUsersOrdersAll(req, res);
  }else if(req.query.product_name){
    userController.getUsersOrderByProductName(req,res);
  }


});

module.exports = router;

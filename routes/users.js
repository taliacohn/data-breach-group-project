const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {

  if(req.query.email && req.method === 'GET'){
    userController.getUserAccountExistence(req,res)
  }else if(req.query.name){
    userController.getUserNameExistence(req, res)
  }else if(req.query.id && req.query.orders){
    userController.getUsersOrdersAll(req, res);
  }else if(req.query.product_name){
    userController.getUsersOrderByProductName(req,res);
  }


});
router.post('/', function(req, res, next) {
  userController.postLoginUser(req, res)
});
router.put('/', function(req, res, next) {
  userController.postChangeUserData(req,res);
});
router.options('/', function(req, res, next) {
  console.log(req.body)
  // userController.postChangeUserData(req,res);
});

module.exports = router;

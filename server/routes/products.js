var express = require('express');
var router = express.Router();
var productsController = require('../controllers/products');

/* GET users listing. */
router.get('/', productsController.index);

module.exports = router;

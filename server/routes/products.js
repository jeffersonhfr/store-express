var express = require('express');
var router = express.Router();
var productsController = require('../controllers/products');

/* GET users listing. */
router.get('/', productsController.index);
router.get('/adicionar', productsController.addProduct);
router.post('/adicionar', productsController.guardarProduto);
router.get('/:id?', productsController.show);
router.get('/:id/edit', productsController.edit);
router.get('/:id/delete', productsController.delete);

module.exports = router;

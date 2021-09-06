var express = require('express');
var router = express.Router();
var productsController = require('../controllers/products');

/* GET users listing. */
router.get('/', productsController.index);
router.get('/adicionar', productsController.addProduct);
router.post('/adicionar', productsController.guardarProduto);
router.get('/:id', productsController.show);
router.get('/:id/editar', productsController.edit);
router.put('/editar', productsController.atualizar);
router.put('/:id/atualizar', productsController.atualizar);
router.delete('/deletar/:id', productsController.deletarProduto);

module.exports = router;

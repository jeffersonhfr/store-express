var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contact');

/* GET users listing. */
router.get('/', contactController.index);

module.exports = router;

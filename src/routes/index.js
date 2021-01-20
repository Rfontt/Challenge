const express = require('express');
const router = express.Router();
const User = require('./User');
const Product = require('./Product');

router.use(User);
router.use(Product);

module.exports = router;
const express = require('express');
const router = express.Router();

const categoryApi = require('./categories')
const productApi = require('./product')
const userApi = require('./users')

router.use('/product',productApi)
router.use('/Categories',categoryApi)
router.use('/user',userApi)
module.exports = router;
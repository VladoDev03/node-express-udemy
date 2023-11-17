const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const usAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', usAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', usAuth, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', usAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', usAuth, adminController.getEditProduct);

router.post('/edit-product', usAuth, adminController.postEditProduct);

router.post('/delete-product', usAuth, adminController.postDeleteProduct);

module.exports = router;

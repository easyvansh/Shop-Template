const express = require('express');
const router = express.Router();
const {getAllProducts} = require('../database/products')


router.get('/', async(req, res) => {
  const products = await getAllProducts();
  products.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
  res.send('Get all products');
});

router.get('/:productId', (req, res) => {
  res.send(`Get product with id: ${req.params.productId}`);
});

module.exports = router;
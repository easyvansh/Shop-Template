const express = require('express');
const router = express.Router();
const {getAllProducts,getProduct} = require('../database/products')


router.get('/', async (req, res) => {
  const products = await getAllProducts();
  res.send({ status: 'OK', data: products });
});

router.get('/:productId', async (req, res) => {
  const product = await getProduct(req.params.productId);
  console.log(product)
  if (!product) {
    res.status(404).send({ status: 'FAILED', error: 'Product not found' });
    return;
  }
  
  res.send({ status: 'OK', data: product });
});

module.exports = router;
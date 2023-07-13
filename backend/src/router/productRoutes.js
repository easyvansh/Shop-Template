const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all products');
});

router.get('/:productId', (req, res) => {
  res.send(`Get product with id: ${req.params.productId}`);
});

module.exports = router;
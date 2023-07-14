const db = require('./db');

const getAllProducts = async () => {
    const products = await db.products.get();
      return products;
  };

const getProduct = async (id) => {
    const snapshot = await db.products.doc();
    
    return snapshot;
};


module.exports = {
    getAllProducts,
    // getProduct,
  };
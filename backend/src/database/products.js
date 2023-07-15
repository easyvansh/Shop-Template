const db = require("./db");

const getAllProducts = async () => {
  const snapshot = await db.products.get();
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

const getProduct = async (id) => {
  const product = await db.products.doc(id).get();
  return await product.data();
};

module.exports = {
  getAllProducts,
  getProduct,
};

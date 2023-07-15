const db = require("./db");

const getAllProducts = async () => {
  const snapshot = await db.products.get();
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

const getProduct = async (id) => {
  // const ids = snapshot.docs.map((doc)=>doc.id)
  const product = db.products.doc(id);
  return await product.get().data();
};

module.exports = {
  getAllProducts,
  getProduct,
};

const db = require("./db");

const getOrder = async (ref) => {
  const order = await db.orders.where("ref", "==", ref).get();
  return order.docs[0].data();
};

const createOrder = async (order) => {
  const result = await db.orders.add(order);
  return { ...order, id: result.id };
};

module.exports = {
  getOrder,
  createOrder,
};

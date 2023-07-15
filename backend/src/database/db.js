const { db } = require("../firebase.js");

const products = db.collection("products");
const orders = db.collection("orders");

module.exports = {
  products,
  orders,
};

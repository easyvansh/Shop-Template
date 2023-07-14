const {db} = require('../firebase.js')

const products =  db.collection('products');


module.exports = {
    products
}
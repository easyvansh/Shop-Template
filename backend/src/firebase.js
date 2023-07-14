//  npx -p node-firestore-import-export firestore-import -a creds.json -b backup.json

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./creds.json')

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
module.exports = {db}
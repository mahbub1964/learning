const firebaseAdmin = require('firebase-admin');
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const app = initializeApp({ credential: applicationDefault() });

const db = firebaseAdmin.firestore();
const auth = firebaseAdmin.auth();

module.exports = { db, auth };

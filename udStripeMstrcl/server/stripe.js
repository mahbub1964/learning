//console.log("SECRET_KEY:", process.env.SECRET_KEY);
const stripeAPI = require('stripe')(process.env.SECRET_KEY);

module.exports = stripeAPI;

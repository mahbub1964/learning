const express = require('express'), cors = require('cors');
require('dotenv').config({ path: './.env' }); //console.log('SECRET_KEY', process.env.SECRET_KEY);
const createCheckoutSession = require('./api/checkout');
const webhook = require('./api/webhook');
const paymentIntent = require('./api/paymentIntent');
const decodeJWT = require('./auth/decodeJWT');

const app = express();
const port = 8080;

app.use(express.json({
  verify: (req, res, buffer) => req['rawBody'] === buffer
}));
app.use(cors({ origin: true }));
app.use(decodeJWT);

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/create-checkout-session', createCheckoutSession);

app.post('/create-payment-intent', paymentIntent);

app.post('/webhook', webhook);

app.listen(port, () => console.log('server is listening on port', port));


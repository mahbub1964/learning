const stripeAPI = require('../stripe');
const firebase = require('../firebase');

async function createCustomer(userId) {
  const userSnapshot = await firebase.db.collection('users').doc(userId).get();
  const { email } = userSnapshot.data();
  const customer = await stripeAPI.customers.create({email, metadata: {firebaseUID: userId}});
  await userSnapshot.ref.update({ stripeCustomerId: customer.id });
  return customer;
}

async function getCustomer(userId) { let customer = null;
  try {
    const userSnapshot = await firebase.db.collection('users').doc(userId).get();
    const { stripeCustomerId } = userSnapshot.data();
    if(!stripeCustomerId) return createCustomer(userId);
    customer = await stripeAPI.customers.retrieve(stripeCustomerId); // const
  } catch(error) { console.log(error); }
  return customer;
}

module.exports = getCustomer;

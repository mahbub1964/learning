// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore'; // for the db
// import 'firebase/compat/auth';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyDETH7nfUbZwndEDi87Qa6tKB17SvE8bmM",
  authDomain: "nomad-bags-store-udstrp.firebaseapp.com",
  projectId: "nomad-bags-store-udstrp",
  storageBucket: "nomad-bags-store-udstrp.appspot.com",
  messagingSenderId: "836783489489",
  appId: "1:836783489489:web:63e2370d32bdd79d1d20f0"
};

// firebase.initializeApp(config);
// const firestore = firebase.firestore();
// const authOld = firebase.auth();

const app = initializeApp(config);
const db = getFirestore(app); // firestore db
const auth = getAuth(app);

// const createUserProfileDocument_Old = async (userAuth, additionalData) => {
//   console.log("createUserProfileDocument:: userAuth:", userAuth, additionalData);
//   if(!userAuth) return;
//   const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`); //users/uniq26535
//   const snapShot = userRef.get();
//   if(!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({ displayName, email, createdAt, ...additionalData });
//     } catch(error) { console.log('error creating user', error.message); }
//   } console.log("userRef:", userRef);
//   return userRef;
// };

const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log("createUserProfileDocument:: userAuth:", userAuth, additionalData);
  if(!userAuth) return;
  // const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`); //users/uniq26535
  // const snapShot = userRef.get();
  // if(!snapShot.exists) {
  //   const { displayName, email } = userAuth;
  //   const createdAt = new Date();
  //   try {
  //     await userRef.set({ displayName, email, createdAt, ...additionalData });
  //   } catch(error) { console.log('error creating user', error.message); }
  // } console.log("userRef:", userRef);
  const { uid, displayName, email } = userAuth;
  const createdAt = new Date(); let userRef;
  try {
    userRef = await addDoc(collection(db, 'users'), {
      uid, displayName, email, createdAt, ...additionalData
    }); console.log("User document written with ID: ", userRef.id);
  } catch (error) {
    console.error('error creating user', error);
  }
  return userRef;
};

export { db, createUserProfileDocument, auth }; // firestore, authOld,

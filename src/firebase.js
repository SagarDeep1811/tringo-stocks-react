import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.REACT_APP_FIREBASE_APP_ID;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export{db};

// import firebase from 'firebase/compat/app';
// // import 'firebase/compat/auth';
// import 'firebase/compat/firestore';const firebaseConfig = {
//     apiKey: "AIzaSyAc3cJW-rxIAzD6h-5eb2Fz5NoCZpTzVxI",
//     authDomain: "tringo-be3cf.firebaseapp.com",
//     projectId: "tringo-be3cf",
//     storageBucket: "tringo-be3cf.appspot.com",
//     messagingSenderId: "574693320922",
//     appId: "1:574693320922:web:5e24333ccd42584131dde3"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);

//   const db = firebaseApp.firestore();

//   export{db};
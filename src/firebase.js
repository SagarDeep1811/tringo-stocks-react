import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';const firebaseConfig = {
    apiKey: "AIzaSyAc3cJW-rxIAzD6h-5eb2Fz5NoCZpTzVxI",
    authDomain: "tringo-be3cf.firebaseapp.com",
    projectId: "tringo-be3cf",
    storageBucket: "tringo-be3cf.appspot.com",
    messagingSenderId: "574693320922",
    appId: "1:574693320922:web:5e24333ccd42584131dde3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export{db};
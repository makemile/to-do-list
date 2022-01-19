import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD72YzqFENXrIYNNB1dE1kTfkigzj5BAfc",
    authDomain: "to-do-list-6799d.firebaseapp.com",
    projectId: "to-do-list-6799d",
    storageBucket: "to-do-list-6799d.appspot.com",
    messagingSenderId: "399902519129",
    appId: "1:399902519129:web:1db93ec57339aa2acb6648"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db;


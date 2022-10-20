// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAlzs7dJz8b7ibNrF-vSHNYmujMblh7Irc",
    authDomain: "linkedin-clone-mb.firebaseapp.com",
    projectId: "linkedin-clone-mb",
    storageBucket: "linkedin-clone-mb.appspot.com",
    messagingSenderId: "945032411261",
    appId: "1:945032411261:web:9b309a0887c89bf314d914",
    measurementId: "G-WRC0BC50BH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { db, auth };
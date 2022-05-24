// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_RUmzVrfT3vNp6LeaC6lcahWUneJl3G0",
  authDomain: "audible-b9fd6.firebaseapp.com",
  projectId: "audible-b9fd6",
  storageBucket: "audible-b9fd6.appspot.com",
  messagingSenderId: "1017476819727",
  appId: "1:1017476819727:web:190a2d20121c201a6aac7a",
  measurementId: "G-BFH5DG3CHM",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

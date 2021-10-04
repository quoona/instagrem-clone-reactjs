import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKP1mmUuKGfnDfdmUU1DwMEPCpv5mBvWY",
  authDomain: "ig-clone-81ac0.firebaseapp.com",
  projectId: "ig-clone-81ac0",
  storageBucket: "ig-clone-81ac0.appspot.com",
  messagingSenderId: "714029017194",
  appId: "1:714029017194:web:deea578ecb2fed2122c213",
  measurementId: "G-LF1BE2M5YY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

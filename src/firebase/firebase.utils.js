import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDsttTDpZnwVUIJQfwuwmue-V5_IRVLNWI",
  authDomain: "crown-clothing-607b4.firebaseapp.com",
  databaseURL: "https://crown-clothing-607b4.firebaseio.com",
  projectId: "crown-clothing-607b4",
  storageBucket: "crown-clothing-607b4.appspot.com",
  messagingSenderId: "1041342085875",
  appId: "1:1041342085875:web:6ef9cd27054f8871331586",
  measurementId: "G-58XBVNWB33"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

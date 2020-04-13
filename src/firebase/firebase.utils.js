import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCJoa5PUFmTyednG2GmJM382XGvh-tmO3I",
  authDomain: "crown-db-by-beni.firebaseapp.com",
  databaseURL: "https://crown-db-by-beni.firebaseio.com",
  projectId: "crown-db-by-beni",
  storageBucket: "crown-db-by-beni.appspot.com",
  messagingSenderId: "713391861954",
  appId: "1:713391861954:web:eb7bbb28c8ef4a10104b5b"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

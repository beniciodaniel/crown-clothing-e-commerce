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

export const createUserProfileDocument = async (userAuth, additionalData) =>  {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("Error creating user", error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

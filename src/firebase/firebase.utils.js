import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvv2BYLZKBVAx2EjrzbJjvJtceAVBGB5k",
    authDomain: "aprozarlagaraj.firebaseapp.com",
    databaseURL: "https://aprozarlagaraj.firebaseio.com",
    projectId: "aprozarlagaraj",
    storageBucket: "aprozarlagaraj.appspot.com",
    messagingSenderId: "147104478682",
    appId: "1:147104478682:web:e849f7b3d7288882163ce3",
    measurementId: "G-4Z2KHTE3C5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
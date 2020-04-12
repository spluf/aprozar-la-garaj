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


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
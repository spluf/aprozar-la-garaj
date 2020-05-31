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

export const addCategoryDocument = async(category, additionalData) => {
  if(!category) return;

  const {name} = category;

  const collectionRef = firestore.collection('category');
  const categoryRef = await collectionRef.doc();

  try {
    await categoryRef.set({
      name,
      products: [],
      ...additionalData
    })
  }
  catch(error){
    console.log('error creating category', error.message);
  }
}

export const addUOMDocument = async(uom, additionalData) => {
  if(!uom) return;

  const {name} = uom;

  const collectionRef = firestore.collection('uom');
  const uomRef = await collectionRef.doc();

  try {
    await uomRef.set({
      name,
      ...additionalData
    })
  }
  catch(error){
    console.log('error creating category', error.message);
  }
}

export const addProductDocument = async(product, additionalData) => {
  console.log(product);
  if(!product) return;

  const collectionRef = firestore.collection('category');
  const categoryRef = collectionRef.doc(product.category.id);
  const category = await (await categoryRef.get()).data();
  
  
  const existingProduct = category.products.find(prod => prod.id === product.id);
  if(product.id && existingProduct) {
    const products = category.products.map(prod => {
      if(prod.id === product.id)
        prod = {...product, ...additionalData}
      return prod;
    })

    category.products = [...products];
  }
  else {
    product.id = generateId();
    if(category.products.find(prod => prod.id === product.id))
      generateId();
    category.products.push({...product, ...additionalData});
  }
  categoryRef.update(category);
}

export const deleteProductDocument = async(product) => {
  if(!product) return;

  const collectionRef = firestore.collection('category');
  const categoryRef = collectionRef.doc(product.category.id);
  const category = await (await categoryRef.get()).data();
  
  
  const existingProduct = category.products.find(prod => prod.id === product.id);
  if(product.id && existingProduct) {
    const products = category.products.filter(prod => prod.id !== product.id)
    category.products = [...products];
    categoryRef.update(category);
  }
}

const generateId = function(){
  return '' + Math.random().toString(36).substr(2, 20);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
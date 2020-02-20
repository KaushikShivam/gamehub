import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Only importing what we need from the firebase util library. The base firebase import is required though

// Firebase config from dashboard
const config = {
  apiKey: 'AIzaSyAnzDroppWSg3P1WeDMDrrdaQ52ZbU65Zw',
  authDomain: 'gamehub-7a9ff.firebaseapp.com',
  databaseURL: 'https://gamehub-7a9ff.firebaseio.com',
  projectId: 'gamehub-7a9ff',
  storageBucket: 'gamehub-7a9ff.appspot.com',
  messagingSenderId: '152480348693',
  appId: '1:152480348693:web:6c365591e773c4b9d2ec1c',
  measurementId: 'G-6NQXDETW8F'
};

// Take the auth object that we got from auth library
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Check if the user exists in Firebase
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
      console.log('Error creating user', error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
  console.log('DONE');
};

// Get the snapshop and return data
export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Exporting auth and firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// exporting google auth util
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

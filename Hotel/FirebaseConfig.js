// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCO-qH38eVQtuvGRuvSwDVCUN34C_JE5bo',
  authDomain: 'hotel3-ac6ed.firebaseapp.com',
  projectId: 'hotel3-ac6ed',
  storageBucket: 'hotel3-ac6ed.appspot.com',
  messagingSenderId: '317029996874',
  appId: '1:317029996874:web:c06fe4d38c6105506889b3',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
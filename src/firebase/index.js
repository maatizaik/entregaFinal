import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY5BIK-RBc-LK5YG6AZ44WIuOmJHcqsIE",
  authDomain: "ecommerce-firebase-700d6.firebaseapp.com",
  projectId: "ecommerce-firebase-700d6",
  storageBucket: "ecommerce-firebase-700d6.appspot.com",
  messagingSenderId: "337634304319",
  appId: "1:337634304319:web:b6e3ce406485c5346e738a",
  measurementId: "G-QXBSXZ2358"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getData= () => getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCTm8mFMJNP4opLBjTMQHnUyVSIwnW40o",
  authDomain: "e-commerce-46e38.firebaseapp.com",
  databaseURL: "https://e-commerce-46e38-default-rtdb.firebaseio.com",
  projectId: "e-commerce-46e38",
  storageBucket: "e-commerce-46e38.appspot.com",
  messagingSenderId: "179847634542",
  appId: "1:179847634542:web:4b3d565f5afa8493e3507f",
  measurementId: "G-MQ398P6M4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)
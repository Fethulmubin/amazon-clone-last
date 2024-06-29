
import firebase from "firebase/compat/app";
// import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// import 'firebase/compact/firestore'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARqHJH3i-7UaBuMQ2orr-WdStdvVbm_y8",
  authDomain: "clone-last-dda87.firebaseapp.com",
  projectId: "clone-last-dda87",
  storageBucket: "clone-last-dda87.appspot.com",
  messagingSenderId: "193292635978",
  appId: "1:193292635978:web:cbfac20c2744675774bbb3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore();
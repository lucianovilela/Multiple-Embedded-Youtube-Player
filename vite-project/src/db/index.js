// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs,  } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA119zytmebMbQM1CFFYH23dtA8S9ydB0k",
  authDomain: "reforma-94f3f.firebaseapp.com",
  projectId: "reforma-94f3f",
  storageBucket: "reforma-94f3f.appspot.com",
  messagingSenderId: "1122185975",
  appId: "1:1122185975:web:706e3f8bf0f38e201cd9f2",
  measurementId: "G-2YL9WR34F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export async function getList(path) {
    const col = collection(db, path);
    const snapshot = await getDocs(col);
    const list = snapshot.docs.map(doc => doc.data());
    return list;
}

export async function onAuthStateChanged(func){
    if(typeof func === 'function')
        auth.onAuthStateChanged(func);
}
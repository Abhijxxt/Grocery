import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDztVn3utSbq0bXicfdzvdG0V_CuRp3ifg",
    authDomain: "fir-15-02-24.firebaseapp.com",
    databaseURL: "https://fir-15-02-24-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-15-02-24",
    storageBucket: "fir-15-02-24.appspot.com",
    messagingSenderId: "205120726655",
    appId: "1:205120726655:web:1731db9e17b41293a3814a"
};

const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);
export const db = getFirestore(app);
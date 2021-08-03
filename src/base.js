import Rebase from 're-base';
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDO7bNm5bKX05O2sCTkyMcmjx3Uq18ltss",
    authDomain: "denys-app-psychologists.firebaseapp.com",
    databaseURL: "https://denys-app-psychologists-default-rtdb.firebaseio.com",
    projectId: "denys-app-psychologists",
    storageBucket: "denys-app-psychologists.appspot.com",
    messagingSenderId: "551840717626",
    appId: "1:551840717626:web:4d9acae625995d96880e03"
})
const db = firebaseApp.database()

export {db};



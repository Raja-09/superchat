import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgPGDcTSH2Ltd8D72DvbEyHgc3mZ5MqPY",
    authDomain: "superchat-7040c.firebaseapp.com",
    projectId: "superchat-7040c",
    storageBucket: "superchat-7040c.appspot.com",
    messagingSenderId: "859535791333",
    appId: "1:859535791333:web:e3fa4bd777006faf1ab00c",
    measurementId: "G-H1J9YHWHQ4"
});

const db = fireBaseApp.firestore();

const auth = firebase.auth();

export { db, auth }
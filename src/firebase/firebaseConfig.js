import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAzNFMx0l3x-1qSB7zYEHJwasBnkPOfpg0",
    authDomain: "ms-mv-71de8.firebaseapp.com",
    projectId: "ms-mv-71de8",
    storageBucket: "ms-mv-71de8.appspot.com",
    messagingSenderId: "11803494011",
    appId: "1:11803494011:web:313992c0215928cb3b44de",
    measurementId: "G-XKKEK82ZPD"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
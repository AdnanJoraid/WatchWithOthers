import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyByBQHXoi-_ypGVFdxuyxH97GpmLcSoP70",
    authDomain: "watchwithothers.firebaseapp.com",
    projectId: "watchwithothers",
    storageBucket: "watchwithothers.appspot.com",
    messagingSenderId: "1045114887573",
    appId: "1:1045114887573:web:bc7b61675d3028ae6d2a9c"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebaseConfig




import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "API_KEY",
    authDomain: "covid19-tracker-jmn.firebaseapp.com",
    projectId: "covid19-tracker-jmn",
    storageBucket: "covid19-tracker-jmn.appspot.com",
    messagingSenderId: "917575370092",
    appId: "1:917575370092:web:b9039a632f39f249d85f49",
    measurementId: "G-0FYW7XCDVQ"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
    db,
    auth,
    storage
};
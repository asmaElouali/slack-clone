import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDs6mimQZzRjCNtIlOPUkSsHMkWnbcJOes",
    authDomain: "slack-clone-53c3c.firebaseapp.com",
    projectId: "slack-clone-53c3c",
    storageBucket: "slack-clone-53c3c.firebasestorage.app",
    messagingSenderId: "276835205462",
    appId: "1:276835205462:web:fe182557129b2cdad896f7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }
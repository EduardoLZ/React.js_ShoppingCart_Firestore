import firebase from 'firebase'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {

};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
const fs = firebase

export { auth, storage, db, fs };
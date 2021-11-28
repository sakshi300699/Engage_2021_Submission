import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBS096Mog7jmUUns7EfYMvcmmHe4DWP30Q",
  authDomain: "quora-9ec14.firebaseapp.com",
  projectId: "quora-9ec14",
  storageBucket: "quora-9ec14.appspot.com",
  messagingSenderId: "83168616251",
  appId: "1:83168616251:web:dba966c84fd4befa54e11e",
  measurementId: "G-XX2G0R803E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
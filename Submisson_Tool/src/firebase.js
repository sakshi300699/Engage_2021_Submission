import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlOLNdyufakTPQCesfLXT0SchAZfaNK_U",
  authDomain: "class-6fef2.firebaseapp.com",
  projectId: "class-6fef2",
  storageBucket: "class-6fef2.appspot.com",
  messagingSenderId: "125760091886",
  appId: "1:125760091886:web:ce2522562250bc4ce9e5ff",
  measurementId: "G-DD2VYNMTL8",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
// Sign in and check or create account in firestore
const signInWithGoogle = async () => {
  try {
    const response = await auth.signInWithPopup(googleProvider);
    console.log(response.user);
    const user = response.user;
    console.log(`User ID - ${user.uid}`);
    const querySnapshot = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (querySnapshot.docs.length === 0) {
      // create a new user
      await db.collection("users").add({
        uid: user.uid,
        enrolledClassrooms: [],
      });
    }
  } catch (err) {
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};

export { app, auth, db, signInWithGoogle, logout };

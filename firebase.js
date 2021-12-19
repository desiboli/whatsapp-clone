import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPBIuKZHRJx3hrIkdAPwUJZ2mXvwNC7RA",
  authDomain: "whatsapp-clone-ff295.firebaseapp.com",
  projectId: "whatsapp-clone-ff295",
  storageBucket: "whatsapp-clone-ff295.appspot.com",
  messagingSenderId: "132726059474",
  appId: "1:132726059474:web:93bee20245e9772246d80b",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, signInWithPopup, provider };

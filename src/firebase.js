// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD4XnRzP6TOsgVgld60xLOXR6mEJZK1o8",
  authDomain: "idea-container-91493.firebaseapp.com",
  projectId: "idea-container-91493",
  storageBucket: "idea-container-91493.appspot.com",
  messagingSenderId: "757467334010",
  appId: "1:757467334010:web:ae532bc31b08cfd0bb42c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-OM59SBmIr89tlss0T8iYgSCDltx9s0g",
  authDomain: "form-authentication-reac-78a09.firebaseapp.com",
  projectId: "form-authentication-reac-78a09",
  storageBucket: "form-authentication-reac-78a09.appspot.com",
  messagingSenderId: "962999627823",
  appId: "1:962999627823:web:4c0c3d072a62cd6abb16da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const providerGithub = new GithubAuthProvider();
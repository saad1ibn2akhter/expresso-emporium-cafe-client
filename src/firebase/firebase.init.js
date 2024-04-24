// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGFFVHiyLvzVaehTTRYj7JAzvN3B50aKs",
  authDomain: "coffee-store-firebase-15aaa.firebaseapp.com",
  projectId: "coffee-store-firebase-15aaa",
  storageBucket: "coffee-store-firebase-15aaa.appspot.com",
  messagingSenderId: "436179479392",
  appId: "1:436179479392:web:e0359c9a42a29757a70c05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// export deafult auth;
export default auth;
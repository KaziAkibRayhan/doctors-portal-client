// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// apiKey: "AIzaSyBQG63bOtiaiBkWgSRZj6FnoWfLwwor8o0",
//   authDomain: "doctors-portal-8b6d3.firebaseapp.com",
//   projectId: "doctors-portal-8b6d3",
//   storageBucket: "doctors-portal-8b6d3.appspot.com",
//   messagingSenderId: "69681205189",
//   appId: "1:69681205189:web:f34624317f7f09d8b4c5ac",

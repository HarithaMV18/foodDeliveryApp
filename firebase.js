// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_API,
  authDomain: "foodapp-4f82d.firebaseapp.com",
  projectId: "foodapp-4f82d",
  storageBucket: "foodapp-4f82d.appspot.com",
  messagingSenderId: "855276110432",
  appId: "1:855276110432:web:fd25a96446e0060d837905",
  measurementId: "G-7W31SFGMK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
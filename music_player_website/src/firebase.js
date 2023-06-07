// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_WEB_API_KEY,
  authDomain: "music-player-website.firebaseapp.com",
  projectId: "music-player-website",
  storageBucket: "music-player-website.appspot.com",
  messagingSenderId: "719178606108",
  appId: "1:719178606108:web:56dff056b95c9f487721d9",
  measurementId: "G-H46H07ZH0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export{database}
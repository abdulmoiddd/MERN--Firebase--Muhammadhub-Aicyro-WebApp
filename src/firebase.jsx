import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9KPqPKuLypCDG0LUeXaxEjojincU6WeM",
  authDomain: "muhammad-hub.firebaseapp.com",
  projectId: "muhammad-hub",
  storageBucket: "muhammad-hub.firebasestorage.app",
  messagingSenderId: "993598901977",
  appId: "1:993598901977:web:180243dc677664504478c8",
  measurementId: "G-TF78KL8R33",
  databaseURL: "https://muhammad-hub-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZtxfo1vX0nfv-ugsnBx-bYDNPtrbaJp0",
  authDomain: "my-projects-a87bf.firebaseapp.com",
  projectId: "my-projects-a87bf",
  storageBucket: "my-projects-a87bf.firebasestorage.app",
  messagingSenderId: "188258205423",
  appId: "1:188258205423:web:12b7226975f120874be51a",
  measurementId: "G-WNTQVZL1S5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

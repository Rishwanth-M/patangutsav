import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAtNXG46tyO2FDZ0yO5p8CiNpp2uB3IbvE",
    authDomain: "quiz-47dd2.firebaseapp.com",
    projectId: "quiz-47dd2",
    storageBucket: "quiz-47dd2.firebasestorage.app",
    messagingSenderId: "172238588465",
    appId: "1:172238588465:web:2aeddba718aef68b952310",
    measurementId: "G-TXMB92DQNC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

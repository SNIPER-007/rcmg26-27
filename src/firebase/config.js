import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB54MP-wQqMAxnvQPu3wsDx3YvNFOin9b4",
  authDomain: "rcmg-portal.firebaseapp.com",
  projectId: "rcmg-portal",
  storageBucket: "rcmg-portal.firebasestorage.app",
  messagingSenderId: "672508772284",
  appId: "1:672508772284:web:d28f06e38980b62b7b75b9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

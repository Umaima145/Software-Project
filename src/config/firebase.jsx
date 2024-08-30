// firebase.js (or a similar file)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg9XZWNeeVyKGjT5Wo-M58neVc3WCAK-M",
  authDomain: "software-4e49a.firebaseapp.com",
  projectId: "software-4e49a",
  storageBucket: "software-4e49a.appspot.com",
  messagingSenderId: "766285218552",
  appId: "1:766285218552:web:b6e5bfd872fdfa6778f10d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

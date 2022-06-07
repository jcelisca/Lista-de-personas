import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-NUubK16wXWF5UZ4zF8TY8kVAIq_W77U",
  authDomain: "listado-personas-70b77.firebaseapp.com",
  databaseURL: "https://listado-personas-70b77-default-rtdb.firebaseio.com",
  projectId: "listado-personas-70b77",
  storageBucket: "listado-personas-70b77.appspot.com",
  messagingSenderId: "312992392726",
  appId: "1:312992392726:web:efd31c3ace0588c4bff737"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };

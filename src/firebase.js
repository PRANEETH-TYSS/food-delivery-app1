import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCXnIHnUNt1A4UqF7rQLxq-3-AYAXKSfv4",
  authDomain: "food-delivery-a97ac.firebaseapp.com",
  projectId: "food-delivery-a97ac",
  storageBucket: "food-delivery-a97ac.appspot.com",
  messagingSenderId: "661357294999",
  appId: "1:661357294999:web:427cc6556b1a22263640d2",
  measurementId: "G-80KH4CTWTE",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;

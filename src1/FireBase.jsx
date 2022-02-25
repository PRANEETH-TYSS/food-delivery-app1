import firebase from "firebase";
import "firebase/auth";

// hosting

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

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
export { googleAuthProvider, facebookAuthProvider };

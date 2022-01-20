import firebase from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDRfogi1PBhOFLVN4XHB_dhxuF51XGhip8",
  authDomain: "pusheez-362b4.firebaseapp.com",
  projectId: "pusheez-362b4",
  storageBucket: "pusheez-362b4.appspot.com",
  messagingSenderId: "850070414754",
  appId: "1:850070414754:web:840ad4602404cdb752fefb"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;

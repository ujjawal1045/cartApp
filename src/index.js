import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmd-ZN6hX9y03pfU4BHgXKvDuOdw5aoHI",
  authDomain: "cartapp-8ee40.firebaseapp.com",
  projectId: "cartapp-8ee40",
  storageBucket: "cartapp-8ee40.appspot.com",
  messagingSenderId: "319745762244",
  appId: "1:319745762244:web:8566b1bb93e1498562fa91"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


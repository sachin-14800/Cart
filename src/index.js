import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6NxRD8PgxcwEvOSqTEVGSDcwTJxEBXhg",
  authDomain: "cart-6cb6a.firebaseapp.com",
  projectId: "cart-6cb6a",
  storageBucket: "cart-6cb6a.appspot.com",
  messagingSenderId: "359818873455",
  appId: "1:359818873455:web:4d061fda58a780de3d9b9a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

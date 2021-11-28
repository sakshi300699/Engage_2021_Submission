import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyCJDBKJwo7hH7Dv2bVVLF3nRtoBkhRgOoc",
    authDomain: "react-notes-29b22.firebaseapp.com",
    projectId: "react-notes-29b22",
    storageBucket: "react-notes-29b22.appspot.com",
    messagingSenderId: "661412704960",
    appId: "1:661412704960:web:4842690c8820d79a443325",
    measurementId: "G-5CH3777K6K"
  };

  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

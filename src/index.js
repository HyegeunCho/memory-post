import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

import SignInScreen from './SignInScreen';

var config = {
    apiKey: "AIzaSyC3JCUu3ixuiKFef9isK2GlXYnhY6QCQ14",
    authDomain: "memorypost-hgcho.firebaseapp.com",
    databaseURL: "https://memorypost-hgcho.firebaseio.com",
    projectId: "memorypost-hgcho",
    storageBucket: "memorypost-hgcho.appspot.com",
    messagingSenderId: "862885935879"
};
firebase.initializeApp(config);

var db;
firebase.firestore().enablePersistence()
.then(function() {
    db = firebase.firestore();
})
.catch(function(err) {
    console.log(`[Firestore] Cannot use persistence mode: ${err.code}`);
    db = firebase.firestore();
})
.finally(function() {
    ReactDOM.render(<SignInScreen/>, document.getElementById('root'));
    registerServiceWorker();
});



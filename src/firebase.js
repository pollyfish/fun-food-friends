//import React, { Component } from 'react';
  import firebase from 'firebase'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAgSfLzOQkWaCrt7ycNcnWhAxt9JyFR_cc",
    authDomain: "fun-food-friends-a5658.firebaseapp.com",
    databaseURL: "https://fun-food-friends-a5658.firebaseio.com",
    projectId: "fun-food-friends-a5658",
    storageBucket: "fun-food-friends-a5658.appspot.com",
    messagingSenderId: "690487521270"
  };
  firebase.initializeApp(config);

  export default firebase;

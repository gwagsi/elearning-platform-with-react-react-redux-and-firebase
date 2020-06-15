import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBnyZ0eIkPBgBlRgyMqX2WhPMs_GRIFnUc",
    authDomain: "teacher-booking-app.firebaseapp.com",
    databaseURL: "https://teacher-booking-app.firebaseio.com",
    projectId: "teacher-booking-app",
    storageBucket: "teacher-booking-app.appspot.com",
    messagingSenderId: "464027149994",
    appId: "1:464027149994:web:764c1ae7f1281d8c6312d3",
    measurementId: "G-476SLNYTF4"
  };
  // Initialize Firebase
  class Firebase {
    constructor() {
      firebase.initializeApp(config);
  
      this.auth = firebase.auth();
      this.db = firebase.database();
    }
  
    // *** Auth API ***
  
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  
    // *** User API ***
  
    user = uid => this.db.ref(`users/${uid}`);
  
    users = () => this.db.ref('users');
  }
  
  export default Firebase;

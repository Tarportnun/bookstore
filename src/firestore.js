import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDubrAvpLgo0C5wwPil_It01-WOxwHoQNI",
    authDomain: "bookstore-3183a.firebaseapp.com",
    databaseURL: "https://bookstore-3183a.firebaseio.com",
    projectId: "bookstore-3183a",
    storageBucket: "bookstore-3183a.appspot.com",
    messagingSenderId: "247023841283"
  };
  
  firebase.initializeApp(config);
  const db = firebase.firestore();
  export default db;
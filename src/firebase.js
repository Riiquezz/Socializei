  import * as firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyAKP70VchZeBhuT0_eWI0Pi9hLFga70U6c",
    authDomain: "socializei-2962d.firebaseapp.com",
    databaseURL: "https://socializei-2962d.firebaseio.com",
    projectId: "socializei-2962d",
    storageBucket: "socializei-2962d.appspot.com",
    messagingSenderId: "586731277898",
    appId: "1:586731277898:web:4454887acb1723b4db60b3",
    measurementId: "G-ZXT1C96CPT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export const database= firebase.database().ref('/notes');
  export const userDatabase=firebase.database().ref('/users');
  export const auth =firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  
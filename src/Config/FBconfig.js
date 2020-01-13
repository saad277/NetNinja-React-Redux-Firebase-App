import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDNSmm-T37SahyQIMslCQ1bczPp5uP8K5g",
    authDomain: "net-ninja-marioplan-6aa5c.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-6aa5c.firebaseio.com",
    projectId: "net-ninja-marioplan-6aa5c",
    storageBucket: "net-ninja-marioplan-6aa5c.appspot.com",
    messagingSenderId: "602818141213",
    appId: "1:602818141213:web:c8fdead1011d89a2b37af4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  




  export default firebase;
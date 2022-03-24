import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here



    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();
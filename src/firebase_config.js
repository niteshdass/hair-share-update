import firebase from 'firebase'

const firebaseConfig = {
      apiKey: "AIzaSyAN0fJor3wE8U_dP_QdIcUI1ikasjrGVcA",
      authDomain: "hairshare-83628.firebaseapp.com",
      databaseURL: "https://hairshare-83628.firebaseio.com",
      projectId: "hairshare-83628",
      storageBucket: "hairshare-83628.appspot.com",
      messagingSenderId: "48596281980",
      appId: "1:48596281980:web:338f7e987df8792d6577f9",
      measurementId: "G-6R30QL1TWP"
    }; 

    firebase.initializeApp(firebaseConfig);

    const db= firebase.firestore();

    export {db};
    
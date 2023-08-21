
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";
  import { getDatabase, ref,get, child } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB4B3oevoBPJjcFtKXOCthU1W17_KmqAc8",
    authDomain: "fir-ae3ac.firebaseapp.com",
    databaseURL: "https://fir-ae3ac-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-ae3ac",
    storageBucket: "fir-ae3ac.appspot.com",
    messagingSenderId: "245781102021",
    appId: "1:245781102021:web:8ae1ef0153d04949409fac",
    measurementId: "G-6BLFE4P3MG"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const dbRef = ref(getDatabase(app));
  get(child(dbRef, `categories`)).then((snapshot) => {
        console.log(snapshot.val());
        snapshot.val().forEach(element => {
        });


    });
























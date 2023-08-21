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
     const login = document.querySelector(".dn");
     login.addEventListener("click",function () {
         const mail = document.querySelector(".form_control_email");
         const  password = document.querySelector(".form_control_password");
         get(child(dbRef, `users`)).then((snapshot) => {
            const users = Object.values(snapshot.val())
            console.log(users);
        users.forEach(element => {
            if (mail.value == element["Email"]) {
                if (password.value==element["Password"]) {
                    sessionStorage.setItem("survival",element["id"])
                    if (element["role"]==1) {
                        window.location.href="darkpan-1.0.0/index.html"
                    }else{
                        window.location.href = "index.html"
                    }
                }else{

                    document.querySelector(".notification").innerHTML="Sai mật khẩu"
                }
            }else{
             document.querySelector(".notification").innerHTML="Sai tài khoản"
            }
        });
    })
});
 

























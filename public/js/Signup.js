     // Import the functions you need from the SDKs you need
     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";
     import { getDatabase,set, ref,get, child } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-database.js";
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
     function writeUserData(id, Yourname, Lastname, Email,Password,Phone,Birthday) {
        const db = getDatabase();
        set(ref(db, 'users/' + id), {
            id: id,
            Yourname: Yourname,
            Email: Email,
            Lastname:Lastname,
            Password:Password,
            role:0,
            Phone:Phone,
            Birthday:Birthday,
        });
      }
   
     // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     const dbRef = ref(getDatabase(app));
     const login = document.querySelector(".dk");
     login.addEventListener("click",function () {
         const yourName = document.querySelector(".form_control_yourname");
         const lastName = document.querySelector(".form_control_lastname");
         const mail = document.querySelector(".form_control_email_signup");
         const  password = document.querySelector(".form_control_password_signup");
         const phone = document.querySelector(".form_control_phone");
         const birthday = document.querySelector(".form_control_birthday");
         const  confirm_password = document.querySelector(".form_control_confirmpassword_signup");
         get(child(dbRef, `users`)).then((snapshot) => {
            const id= snapshot.val().length
            if (password.value!==confirm_password.value) {
                document.querySelector(".notification_signup").innerHTML="Sai mật khẩu"
            }else{
                writeUserData(id,yourName.value, lastName.value,mail.value,password.value,phone.value,birthday.value);
                sessionStorage.setItem("survival",id)
                // window.location.href="index.html";

            }
    })
});
 
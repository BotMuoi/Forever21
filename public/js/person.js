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
if (sessionStorage.getItem("survival")) {
    console.log("g");
    const iduser =sessionStorage.getItem("survival")
    console.log(iduser);
    get(child(dbRef, `users`)).then((snapshot)=>{
        console.log(snapshot.val());
        const user =snapshot.val().find(U=>U["id"]==iduser)
        console.log(user);
        const username = user['Yourname'] + " " + user['Lastname']
        const displayPerson = document.querySelector(".personal").innerHTML
    =`<div class="dropdown">
            <ion-icon name="person-outline"></ion-icon>
            <div class="dropdown-content">
                <span>${username}</span>
                <a class="btn_logOut" onclick="logOut()" href="#">Đăng xuất</a>

            </div>
    </div>`
    const btnLogOut = document.querySelector('.btn_logOut')
    btnLogOut.addEventListener("click",
    () => {
        sessionStorage.removeItem("survival");
        window.location.href="index.html"
    })
    }

    
    )}else{
        console.log("a");
    }

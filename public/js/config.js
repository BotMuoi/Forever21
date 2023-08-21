
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";
//   import { getDatabase, ref,get, child } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-database.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyB4B3oevoBPJjcFtKXOCthU1W17_KmqAc8",
//     authDomain: "fir-ae3ac.firebaseapp.com",
//     databaseURL: "https://fir-ae3ac-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "fir-ae3ac",
//     storageBucket: "fir-ae3ac.appspot.com",
//     messagingSenderId: "245781102021",
//     appId: "1:245781102021:web:8ae1ef0153d04949409fac",
//     measurementId: "G-6BLFE4P3MG"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const dbRef = ref(getDatabase(app));
//     get(child(dbRef, `products`)).then((snapshot) => {
//     if (snapshot.exists()) {
//         const products = snapshot.val()
//         const web_container = document.querySelector('.banner6-2')
//         for (let index = 0; index < 6; index++) {
//             let page_content = 
//             `
//                 <div class="banner6-1">
//                     <a class="chuyen1" href="trangchitiet.html?idproduct=${products[index]['id']}">
//                         <div class="hinh">
//                             <img src="images/${products[index]['img'][0]}" alt="">
//                         </div>
//                     </a>
//                     <div class="bosung">
//                         <div class="option-color">
//                             <label for="option"><img src="images/Ellipse 11.png" alt=""></label>
//                             <label for="option1"><img src="" alt=""></label>
//                             <label for="option2"></label>
//                             <label for="option3"></label>
//                             <input type="radio" id="option" name="mau">
//                             <input type="radio" id="option1" name="mau">
//                             <input type="radio" id="option2" name="mau">
//                             <input type="radio" id="option3" name="mau">
//                         </div>
//                         <ion-icon name="heart-outline"></ion-icon>
//                     </div> 
//                     <a href="">
//                         <div class="decription">
//                             <span>${products[index]['name']}</span><br>
//                             <span class="gia">
//                                 <b>₫${new Intl.NumberFormat().format(Math.floor(products[index]['price']*70/100))}</b>
//                                 <s>₫${new Intl.NumberFormat().format(products[index]['price'])}</s>
//                                 <span>${products[index]['sale']}</span>
//                             </span><br>
//                             <span class="kieuchu">Summer Deals!</span><br>
//                             <span class="mamau">Matching Item Available</span><br>
//                             <span class="rating"><img src="images/Group 30.svg" alt=""><span>(31)</span></span>
//                             <span>676 Comments</span>
//                         </div>
//                     </a>
//                 </div>
//             `
//             web_container.innerHTML += page_content
//         }
//     } else {
//         console.log("No data available");
//     }
//     }).catch((error) => {
//     console.error(error);
//     });

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
  let param = window.location.search;
  let urlRequest = new URLSearchParams(param);
  const id_product =urlRequest.get("idproduct");
  get(child(dbRef, `products/${id_product}`)).then((snapshot) =>{
    const web_container = document.querySelector(".motasp");
    const product = snapshot.val()
    console.log(product)
    const add_detail=
        `
        <div class="ttsp">
            <h2>MORE IMAGES</h2>
            <div class="showsp">
                <label class="hieuungchuyenanh" for="chonanh1"><img src="images/${product['img'][0]}" alt=""></label>
                <label class="hieuungchuyenanh" for="chonanh2"><img src="images/${product['img'][1]}" alt=""></label>
                <label class="hieuungchuyenanh" for="chonanh3"><img src="images/${product['img'][2]}" alt=""></label>
                <label class="hieuungchuyenanh" for="chonanh4"><img src="images/${product['img'][3]}" alt=""></label>
                <input onclick="selectimg()" type="radio" name="chonanhsp" id="chonanh1">
                <input onclick="selectimg()" type="radio" name="chonanhsp" id="chonanh2">
                <input onclick="selectimg()" type="radio" name="chonanhsp" id="chonanh3">
                <input onclick="selectimg()" type="radio" name="chonanhsp" id="chonanh4">
            </div>
            <h2 class="PI">PRODUCT INFORMATION</h2>
            <h3>Details</h3>
            <span>${product['desc']}</span>
           
        </div>
        <div id="" class="slider">
            <div id="slides" class="slides">
                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio2">
                <input type="radio" name="radio-btn" id="radio3">
                <input type="radio" name="radio-btn" id="radio4">
                <div id="slide-one" class="slide-first">
                    <img class="images" src="images/${product['img'][0]}" alt="">
                </div>
                <div class="slide">
                    <img class="images" src="images/${product['img'][0]}" alt="">
                </div>
                <div class="slide">
                    <img class="images" src="images/${product['img'][0]}" alt="">
                </div>
                <div class="slide">
                    <img class="images" src="images/${product['img'][0]}" alt="">
                </div>
                <div class="lens"></div>
                <!-- automatic navigation start -->
                <div class="navigation-auto">
                    <label for="img-selecter-dot0" class="auto-btn"></label>
                    <label for="img-selecter-dot1" class="auto-btn"></label>
                    <label for="img-selecter-dot2" class="auto-btn"></label>
                    <label for="img-selecter-dot3" class="auto-btn"></label>
                    <input class="dungma" onclick="slider_dots()" type="radio" name="img-selecter-dots"
                        id="img-selecter-dot0">
                    <input class="dungma" onclick="slider_dots()" type="radio" name="img-selecter-dots"
                        id="img-selecter-dot1">
                    <input class="dungma" onclick="slider_dots()" type="radio" name="img-selecter-dots"
                        id="img-selecter-dot2">
                    <input class="dungma" onclick="slider_dots()" type="radio" name="img-selecter-dots"
                        id="img-selecter-dot3">
                </div>
            </div>
            <ion-icon onclick="slider_btn(this)" class="icon1" name="chevron-back-circle-outline" data-type="back">
            </ion-icon>
            <ion-icon onclick="slider_btn(this)" class="icon2" name="chevron-forward-circle-outline" data-type="next">
            </ion-icon>
            <!-- manual navigation end -->
        </div>
        <div class="result"></div>
        <div class="options-sp">
            <div class="gtspham">
                <h1>${product['name']}</h1>
                <div class="chinhchu">
                    <img src="images/saonua.png" alt="">
                    <span>Read 6 Reviews | 1 Question, 41 Answers | 41 Buyer Comments or Write a Review</span>
                </div>
                <span class="giaca">₫${new Intl.NumberFormat().format(Math.floor(product['price']*70/100))}</span><br>
                <span class="chinhchutiep"><s>₫${new Intl.NumberFormat().format(product['price'])}</s></span>
                <span class="chinhchutiep">30% OFF</span>
                <div class="kchr">
                    <hr>
                    <img class="plcc" src="images/plcc_card_logo.webp" alt="">
                    <hr>
                </div>
            </div>
            <div class="choose">
                <div>
                    <label for=""><img src="images/choose1.jpg" alt=""></label>
                    <label for=""><img src="images/choose2.webp" alt=""> </label><br>
                    <span class="wh">White</span>
                </div>
                <div class="pick-size">
                    <label class="size-not-allowed" for="1"><s>XS</s></label>
                    <label class="size" for="2">S</label>
                    <label class="size" for="2">M</label>
                    <label class="size" for="4">L</label>
                    <label class="size-not-allowed" for="5"><s>XL</s></label>
                    <input type="radio" name="choose-size" id="1">
                    <input type="radio" name="choose-size" id="2">
                    <input type="radio" name="choose-size" id="3">
                    <input type="radio" name="choose-size" id="4">
                    <input type="radio" name="choose-size" id="5">
                </div>
                <div class="soluong">
                    <span>QUANTITY</span><br>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                    </select>
                </div>
                <div class="search-size">
                    <button>
                        <img src="images/t.png" alt="">
                        <span>Find My Size</span>
                    </button>
                </div>
                <span><b>Availability</b>: Select Styles for Availability</span>
                <div class="tienich">
                    <input type="checkbox" name="tienich" id="cm">
                    <label for="cm"><span></span></label>
                    <span class="csscuoi">Home Delivery</span>
                </div>
            </div>
            <div>
                <div class="TNND">
                    <div><span>ADD TO CARD</span></div>
                    <div class="heartWish">
                        <ion-icon class="heart-outline" name="heart-outline"></ion-icon>
                        <span>Wishlist</span>
                    </div>
                </div>
                <div class="thuonghieu">
                    <a href=""><img src="images/vector (7).png" alt=""></a>
                    <a href=""><img src="images/vector (9).png" alt=""></a>
                    <a href=""><img src="images/vector (1).png" alt=""></a>
                    <a href=""><img src="images/vector (8).png" alt=""></a>
                </div>
            </div>
        </div>`
        web_container.innerHTML=add_detail;
  })


































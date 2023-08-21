"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const urlParams = new URLSearchParams(window.location.search);
let idCat = 2;
if (urlParams.get('idCate')) {
    idCat = Number(urlParams.get('idCate'));
}
console.log(idCat);
let interval;
const hoverImgIn = (element, id) => __awaiter(void 0, void 0, void 0, function* () {
    const img = element.querySelector('img');
    const imgListData = yield fetch(`http://localhost:3000/API/product/images/${id}`);
    const imgList = yield imgListData.json();
    clearInterval(interval);
    interval = setInterval(() => {
        imgList.forEach((image, i) => {
            setTimeout(() => {
                img.src = '/' + image.urlHinh;
            }, (i * 500));
        });
    }, 2000);
});
const hoverImgOut = (element, urlHinhHome) => __awaiter(void 0, void 0, void 0, function* () {
    clearInterval(interval);
    const img = element.querySelector('img');
    img.setAttribute('src', urlHinhHome);
});
//=============================================
const Cagories = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('http://localhost:3000/API/categories');
    const data = yield response.json();
    const Cagories = document.querySelector("#navbar");
    data.forEach((element) => {
        Cagories.innerHTML +=
            `
        <div class="dropdown">
                      <a href="/cat?idCate=${element.id}"><button class="dropbtn">${element.tenLoai}</button></a>
                      <div class="dropdown-content">
                        <!-- <div class="bannerDropdown">
        
                        </div> -->
                      </div>
                    </div>
        `;
    });
});
Cagories();
//=============================================
const newProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('http://localhost:3000/API/product');
    const proList = yield response.json();
    const newProListall = proList.sort(function (a, b) {
        return new Date(a.capNhat).getTime() - new Date(b.capNhat).getTime();
    });
    const newProList = newProListall.filter((pro) => pro.idLoai == idCat);
    const hotProContainer = document.querySelector('#newProduct');
    for (let i = 0; i < 6; i++) {
        const pro = newProList[i];
        let productRating = '';
        for (let i = 0; i < Math.floor(pro.rating); i++) {
            productRating +=
                `
                <i style="color: gold;" class="fa-solid fa-star"></i> 
            `;
        }
        if (Math.ceil(pro.rating) - Math.floor(pro.rating) === 1) {
            productRating +=
                `
            <i style="color: gold;"class="fa-solid fa-star-half-stroke"></i>
            `;
        }
        hotProContainer.innerHTML +=
            `
        <div  href="/fashion/<%=ct.id%>" class="banner6-1">
            <a class="chuyen1" onmouseover="hoverImgIn(this,${pro.id})" onmouseout="hoverImgOut(this,'${pro.urlHinhHome}')" href="/detail?idPro=${pro.id}">
                <div class="hinh">
                    <img class="chan" src="${pro.urlHinhHome}" alt="">
                </div>
            </a>
            <div class="bosung">
                <div class="option-color">
                    <label onclick="choiceColor(this,'1-1');" for="optionxx"><img src="/images/Ellipse 2.png"
                            alt=""></label>
                    <label onclick="choiceColor(this,'1-2');" for="option1xx"><img src="/images/Ellipse 3.png"
                            alt=""></label>
                    <input type="radio" id="optionxx" name="mau">
                    <input type="radio" id="option1xx" name="mau">
                    <!-- <input type="radio" id="option2" name="mau">
                        <input type="radio" id="option3" name="mau"> -->
                </div>
                <ion-icon name="heart-outline"></ion-icon>
            </div>
            <a href="">
                <div class="decription">
                    <a><span>${pro.tenThoiTrang}</span><br></a>
                    <span class="gia">
                        <b>₫${pro.gia.toLocaleString('vi')}</b>
                    </span><br>
                    <span class="kieuchu">${pro.discountEventInformation}</span><br>
                    <span class="mamau">${pro.status}</span><br>
                    ${productRating}
                    <span>${pro.comment} Comments</span>
                </div>
            </a>
        </div>

        `;
    }
});
newProduct();
//==================================================
const hotProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('http://localhost:3000/API/product');
    const proList = yield response.json();
    const hotProList = proList.filter((pro) => pro.hot == 1 && pro.idLoai == idCat);
    console.log(hotProList);
    const hotProContainer = document.querySelector('#productHot');
    for (let i = 0; i < 6; i++) {
        const pro = hotProList[i];
        let productRating = '';
        for (let i = 0; i < Math.floor(pro.rating); i++) {
            productRating +=
                `
                <i style="color: gold;" class="fa-solid fa-star"></i> 
            `;
        }
        if (Math.ceil(pro.rating) - Math.floor(pro.rating) === 1) {
            productRating +=
                `
            <i style="color: gold;"class="fa-solid fa-star-half-stroke"></i>
            `;
        }
        hotProContainer.innerHTML +=
            `
        <div class="banner6-1">
            <a class="chuyen1" href="">
                <div class="hinh">
                    <img class="chan" src="${pro.urlHinhHome}" alt="">
                </div>
            </a>
            <div class="bosung">
                <div class="option-color">
                    <label onclick="choiceColor(this,'1-1');" for="optionxx"><img src="/images/Ellipse 2.png"
                            alt=""></label>
                    <label onclick="choiceColor(this,'1-2');" for="option1xx"><img src="/images/Ellipse 3.png"
                            alt=""></label>
                    <!-- <label for="option2"></label>
                        <label for="option3"></label> -->
                    <input type="radio" id="optionxx" name="mau">
                    <input type="radio" id="option1xx" name="mau">
                    <!-- <input type="radio" id="option2" name="mau">
                        <input type="radio" id="option3" name="mau"> -->
                </div>
                <ion-icon name="heart-outline"></ion-icon>
            </div>
            <a href="">
                <div class="decription">
                    <a href="/fashion/<%=ct.id%>"><span>${pro.tenThoiTrang}</span><br></a>
                    <span class="gia">
                        <b>₫${pro.gia.toLocaleString('vi')}</b>
                    </span><br>
                    <span class="kieuchu">${pro.discountEventInformation}</span><br>
                    <span class="mamau">${pro.status}</span><br>
                    ${productRating}
                    <span>${pro.comment} Comments</span>
                </div>
            </a>
        </div>

        `;
    }
});
hotProduct();
const checkLogged = () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch('http://localhost:3000/API/user/session')
        .then(res => {
        return res.json();
    })
        .then(data => {
        console.log(data);
        const displayPerson = document.querySelector(".user");
        if (data.loggedIn === true) {
            const username = data.userInfo;
            displayPerson.innerHTML =
                `<div class="dropdown dropdownuser">
                <ion-icon name="person-outline"></ion-icon>
                <div class="dropdown-content">
                    <span>${username}</span>
                    <a class="changePW" href="/user/change?id=${data.id}">Change password</a>
                    <a class="btn_logOut" href="/user/thoat">Đăng xuất</a>
                </div>
            </div>`;
        }
    })
        .catch(e => {
        console.log(e);
    });
});
checkLogged();

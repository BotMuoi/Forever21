interface Product {
    readonly id: number
    tenThoiTrang: string
    hot: number
    idLoai:number
    gia:number
    soLanXem:number
    rating:number
    comment:number
    urlHinhHome: string
    discountEventInformation:string
    status:string
    moTa:string
    capNhat:string
}



const urlRequest = new URLSearchParams(window.location.search)
const id_pro = urlRequest.get('idPro')
const detailProduct = async () => {
    const response = await fetch(`http://localhost:3000/API/product/${id_pro}`)
    const images= await fetch(`http://localhost:3000/API/product/images/${id_pro}`)
    const pro = await response.json()
    const imgpro = await images.json()
    console.log(imgpro);
    
    const detailProduct = document.querySelector('.motasp') as HTMLDivElement
    let dshinhnho = ''
    let dshinhlon = ''
    imgpro.forEach((img: any, i: number) => {
        dshinhnho +=
        `
            <label class="hieuungchuyenanh" for="chonanh${i}"><img src="/${img.urlHinh}" alt=""></label>
            <input onclick="selectimg()" type="radio" name="chonanhsp" id="chonanh${i}">
        ` 
        dshinhlon +=
        `
            <div id="slide-one" class="slide-first">
                <img class="images" src="/${img.urlHinhSlide}" alt="">
            </div>
        `
    });

        detailProduct.innerHTML =
        `
        <div class="ttsp">
            <h2>MORE IMAGES</h2>
            <div class="showsp" id="showsp">
               ${dshinhnho}
            </div>
            <h2 class="PI">PRODUCT INFORMATION</h2>
            <h3>Details</h3>
            <span></span>
           
        </div>
        <div id="" class="slider">
            <div id="slides" class="slides">
                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio2">
                <input type="radio" name="radio-btn" id="radio3">
                <input type="radio" name="radio-btn" id="radio4">
                ${dshinhlon}
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
                <h1>${pro.tenThoiTrang}</h1>
                <div class="chinhchu">
                    <img src="/images/saonua.png" alt="">
                    <span>Read 6 Reviews | 1 Question, 41 Answers | 41 Buyer Comments or Write a Review</span>
                </div>
                <span class="giaca">${pro.gia.toLocaleString('vi')}VNĐ</span><br>
                <span class="chinhchutiep">${pro.status}<s></s></span>
                <span class="chinhchutiep">${pro.discountEventInformation}</span>
                <div class="kchr">
                    <hr>
                    <img class="plcc" src="/images/plcc_card_logo.webp" alt="">
                    <hr>
                </div>
            </div>
            <div class="choose">
                <div>
                    <label for=""><img src="/images/choose1.jpg" alt=""></label>
                    <label for=""><img src="/images/choose2.webp" alt=""> </label><br>
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
                        <img src="/images/t.png" alt="">
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
                    <a href=""><img src="/images/vector (7).png" alt=""></a>
                    <a href=""><img src="/images/vector (9).png" alt=""></a>
                    <a href=""><img src="/images/vector (1).png" alt=""></a>
                    <a href=""><img src="/images/vector (8).png" alt=""></a>
                </div>
            </div>
        </div>
        `
        
    }


detailProduct()
const urlParams = new URLSearchParams(window.location.search);
let idCat = 2;

if(urlParams.get('idCate')){
    idCat= Number(urlParams.get('idCate'))
}
console.log(idCat);

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
interface Cagories{
    readonly id: number
    tenLoai:string
    thuTu: number
    anHien:number
}

let interval: any
const hoverImgIn = async(element: HTMLElement,id:number) => {
    const img = element.querySelector('img') as HTMLImageElement
    
    const imgListData = await fetch(`http://localhost:3000/API/product/images/${id}`)
    const imgList = await imgListData.json()
    clearInterval(interval)
    interval = setInterval(
        () => {
           imgList.forEach((image: any, i: number) => {
                setTimeout(
                    ()=>{
                        img.src = '/' + image.urlHinh
                    }, (i * 500)
                )
                
           });
        },2000
    )
}

const hoverImgOut = async (element: HTMLElement, urlHinhHome: string) => {
    clearInterval(interval)
    const img = element.querySelector('img') as HTMLImageElement
    img.setAttribute('src',urlHinhHome)
}
//=============================================
const Cagories = async()=>{
    const response = await fetch('http://localhost:3000/API/categories')
    const data = await response.json()
    const Cagories = document.querySelector("#navbar") as HTMLDivElement
    data.forEach((element: Cagories) => {
        Cagories.innerHTML+=
        `
        <div class="dropdown">
                      <a href="/cat?idCate=${element.id}"><button class="dropbtn">${element.tenLoai}</button></a>
                      <div class="dropdown-content">
                        <!-- <div class="bannerDropdown">
        
                        </div> -->
                      </div>
                    </div>
        `
    }); 
}
Cagories()
//=============================================
const newProduct = async () => {
    const response = await fetch('http://localhost:3000/API/product')
    const proList = await response.json()
    const newProListall = proList.sort(function (a:Product,b:Product) {
        return new Date(a.capNhat).getTime() - new Date(b.capNhat).getTime()
    })
    const newProList= newProListall.filter((pro:any)=> pro.idLoai==idCat)
    const hotProContainer = document.querySelector('#newProduct') as HTMLDivElement
    for (let i = 0; i < 6; i++) {
        const pro = newProList[i];
        
        let productRating = ''
        for (let i = 0; i < Math.floor(pro.rating); i++) {
            productRating += 
            `
                <i style="color: gold;" class="fa-solid fa-star"></i> 
            `
        }
        if(Math.ceil(pro.rating)- Math.floor(pro.rating)===1){ 
            productRating += 
            `
            <i style="color: gold;"class="fa-solid fa-star-half-stroke"></i>
            `
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

        `
        
    }
}

newProduct()


//==================================================
const hotProduct = async () => {
    const response = await fetch('http://localhost:3000/API/product')

    const proList = await response.json()
    const hotProList = proList.filter((pro: Product) => pro.hot == 1 && pro.idLoai == idCat )
    console.log(hotProList);
    const hotProContainer = document.querySelector('#productHot') as HTMLDivElement
    for (let i = 0; i < 6; i++) {
        const pro = hotProList[i];
        let productRating = ''
        for (let i = 0; i < Math.floor(pro.rating); i++) {
            productRating += 
            `
                <i style="color: gold;" class="fa-solid fa-star"></i> 
            `
        }
        if(Math.ceil(pro.rating)- Math.floor(pro.rating)===1){ 
            productRating += 
            `
            <i style="color: gold;"class="fa-solid fa-star-half-stroke"></i>
            `
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

        `
        
    }
}

hotProduct()
const checkLogged = async () => {
    await fetch('http://localhost:3000/API/user/session')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data);
        
        const displayPerson = document.querySelector(".user") as HTMLDivElement
        if(data.loggedIn === true){
            const username = data.userInfo
            displayPerson.innerHTML = 
            `<div class="dropdown dropdownuser">
                <ion-icon name="person-outline"></ion-icon>
                <div class="dropdown-content">
                    <span>${username}</span>
                    <a class="changePW" href="/user/change?id=${data.id}">Change password</a>
                    <a class="btn_logOut" href="/user/thoat">Đăng xuất</a>
                </div>
            </div>`
        }
    })
    .catch(e => {
        console.log(e);
    })
}
checkLogged()
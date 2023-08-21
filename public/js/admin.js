import * as firebase from "./config.js"


const show_hide_navbar = () => {
    document.body.classList.toggle("separate-content")
    let icon = scroll_btn.querySelector(".fa")
    if(icon.classList.contains("fa-greater-than")){
        icon.className = icon.className.replace("fa-greater-than","fa-less-than")
    }else{
        icon.className = icon.className.replace("fa-less-than","fa-greater-than")
    }
}
const scroll_btn = document.querySelector(".scroll-btn")
scroll_btn.addEventListener("click",show_hide_navbar)


const tablinks = document.querySelectorAll(".tablinks")
tablinks.forEach(item => {
    item.addEventListener(
    "click",
        function(event){
            let tabcontent = document.querySelectorAll(".tabcontent")
            let tablinks = document.querySelectorAll(".tablinks")
            tabcontent.forEach(item => {
                item.style.display = "none"
            })
            tablinks.forEach(item => {
                item.className = item.className.replace(" active","")
            })
            document.getElementById(event.target.innerText.toLowerCase()).style.display = "block"
            event.target.className += " active"
            document.querySelector(".default-page").style.display = "none"
        }
    )
})

const loadUiData = async () => {
    //Load categories data
    const cate_data = firebase.loadData("categories")
    cate_data.then((cate) => {
        if(cate.exists()){
        const categories = cate.val().filter(p => p) 
        let cate_content = 
        `
                <h1>Categories</h1>
                <div class="content">
                    <table border="1">
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Function</th>
                        </thead>
                        <tbody>
            `
            categories.forEach((item,i) => {
                cate_content += 
                `
                    <tr>
                        <td>${item['id']}</td>
                        <td id="name" class="input-cell">${item['name']}</td>
                        <td>
                            <button class="admin-btn btn-edit" name="categories" value="${item['id']}"><i class="fa-solid fa-pencil"></i></button>
                            <button class="admin-btn btn-remove" name="categories" value="${item['id']}"><i class="fa-solid fa-trash"></i></button>
                        </td> 
                    </tr>
                `
            });
            cate_content +=
            `
                        </tbody>
                        <tfoot>
                            <th>
                                <a class="link add" href="#" name="category">Add New</a>
                            </th>
                        </tfoot>
                    </table>
                </div>
            `
            document.querySelector(".categories-container").innerHTML = cate_content
        }else{
            console.log("Not Found");
        }
    })
    .catch((error) => {
        console.log(error);
    })
    const product_data = firebase.loadData("products")
    product_data
    .then((products) => {
        return new Promise(
            function(resolve,reject){
                if(products.exists()){
                    const productArr = products.val().filter(p => p) 
                    const category_data = firebase.loadData("categories")
                    category_data.then((cate) => {
                        const categories = cate.val().filter(p => p) 
                        let data = {
                            "categories" : [...categories],
                            "products" : [...productArr]
                        }
                        resolve(data)
                    })
                    .catch((error) => {
                        reject(error)
                    })
                }else{
                    reject("Not Found")
                }
            }
        )
    })
    .then((result) => {
        if(typeof(result)=="object"){
            let page_content = 
            `
                <h1>Products</h1>
                <div class="content">
                    <table border="1">
                        <thead>
                            <th>ID</th>
                            <th>Category Name</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Imgs</th>
                            <th>Feature</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>View</th>
                            <th>Function</th>
                        </thead>
                        <tbody>
            `
            result['products'].forEach(product => {
                let [category] = result['categories'].filter(cate => cate['id'] === product['id_category'])
                let productImg = product['img'].filter(img => img)
                if(category!==undefined){
                    page_content +=
                    `
                        <tr>
                            <td>${product['id']}</td>
                            <td id="id_category" class="input-cell">
                                <select disabled>
                    `

                    result['categories'].forEach(category => {
                        if(category['id'] === product['id_category']){
                            page_content +=
                            `
                                <option value="${category['id']}" selected>${category['name']}</option>
                            `
                        }else{
                            page_content +=
                            `
                                <option value="${category['id']}">${category['name']}</option>
                            `
                        }
                    });

                    page_content +=
                    `        
                                </select>
                            </td>
                            <td id="name" class="input-cell">${product['name']}</td>
                            <td id="price" class="input-cell">${product['price']}</td>
                            <td id="date" class="input-cell proDate">${product['date']}</td>
                            <td id="img" class="input-cell productImgs">
                                <img class="productImg--first productImg0" src="assets/images/products/${productImg[0]}" alt="${product['name']}">
                                <div class="productImgs-dropdown">
                    `
                    productImg.forEach((img,i) => {
                        page_content +=
                        `
                            <div class="productImg--row">
                                <label class="labelImg" for="productImg${i}">
                                    <img src="assets/images/products/${img}" alt="">
                                </label>
                                <input type="file" accept="image/*" disabled class="productImgs--ipt" id="productImg${i}" hidden>
                            </div>
                        `
                    });
                    page_content +=
                    `
                                </div>
                            </td>
                            <td id="feature" class="input-cell">${product['feature']}</td>
                            <td id="desc" class="input-cell"><textarea cols="20" rows="5" readonly>${product['desc']}</textarea></td>
                            <td>${product['rating']}</td>
                            <td>${product['view']}</td>
                            <td>
                                <button class="admin-btn btn-edit" name="products" value="${product['id']}"><i class="fa-solid fa-pencil"></i></button>
                                <button class="admin-btn btn-remove" name="products" value="${product['id']}"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    `
                }
            })
            page_content +=
            `
                    </tbody>
                    <tfoot>
                        <th>
                            <a class="link add" href="#" name="product">Add New</a>
                        </th>
                    </tfoot>
                </table>
            </div>
            `
            document.querySelector('.products-container').innerHTML = page_content
        }else{
            console.log(result);
        }
    })
    .catch((error) => {
        console.log(error);
    }) 
    const userData = firebase.loadData("users")
    userData.then((users) => {
        const userArr = users.val().filter(p => p)
        let page_content = 
        `
            <h1>Users</h1>
            <div class="content">
                <table border="1">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Function</th>
                    </thead>
                    <tbody>
        `
        userArr.forEach(user => {
            page_content +=
            `
                <tr>
                    <td>${user['id']}</td>
                    <td>${user['name']}</td>
                    <td>${user['email']}</td>
                    <td>
                        <button class="btn-remove" name="users" value="${user['id']}">Remove</button>
                    </td>
                </tr>
            `
        });
        page_content += 
        `
                </tbody>
                <tfoot>
                    <th>
                        <a class="link add" href="#" name="user">Add New</a>
                    </th>
                </tfoot>
            </table>
            </div>
        `
        document.querySelector('.users-container').innerHTML = page_content
    })
    .catch(error =>{
        console.log(error);
    })
}

const removeRow = async () => {
    const btnRemove = document.querySelectorAll('.btn-remove')
    btnRemove.forEach(item =>{
        item.addEventListener(
            "click",
            () => {
                console.log("s");
                firebase.removeData(item.name,item.value)
                let removeRow = item.parentElement.parentElement
                removeRow.remove()
            }
        )
    })
} 

const addRow = async (collection) => { 
    const popupForm = document.querySelector('.popup--form')
    if(collection === 'category'){
        let popup_content = 
        `
            <div class="alert"></div>
            <div>
                <label for="">Id Category</label>
                <input type="text" readonly placeholder="Auto Number">
            </div>
            <div>
                <label for="">Name</label>
                <input type="text" id="ipt-name" placeholder="Name" required>
            </div>
            <div class="btns">
                <button class="btn-reset">Reset</button>
                <button class="btn-submit">Add</button>
            </div>
        `
        popupForm.innerHTML = popup_content
    }else if(collection === 'product'){
        const cateData = firebase.loadData("categories")
        cateData.then((cate) => {
            const categpries = cate.val()
            let popup_content =
            `
                <div class="alert"></div>
                <div>
                    <label for="id-product">Id Product</label>
                    <input type="text" id="id-product" readonly placeholder="Auto Number">
                </div>
                <div>
                    <label for="cateName">Category</label>
                    <select id="cateName" required>
            `

            categpries.forEach(category => {
                popup_content += ` <option value="${category['id']}">${category['name']}</option> `
            });

            popup_content +=
            `
                    </select>
                </div>
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="ipt-name" placeholder="Name" required>
                </div>
                <div>
                    <label for="price">Price</label>
                    <input type="number" id="price" placeholder="Price" required>
                </div>
                <div>
                    <label for="imgs">Img</label>
                    <input type="file" accept="image/*" id="imgs" multiple required>
                </div>
                <div>
                    <label for="feature">Feature</label>
                    <input type="text" id="feature" placeholder="Feature" required>
                </div>
                <div>
                    <label for="description">Description</label> <br>
                    <textarea id="description" placeholder="Description" required></textarea>
                </div>
                    <div class="btns">
                    <button class="btn-reset">Reset</button>
                    <button class="btn-submit">Add</button>
                </div>
            `
            popupForm.innerHTML = popup_content
        }) 
    }else if(collection === 'user'){
        let popup_content =
        `
            <div class="alert"></div>
            <div>
                <label for="id-product">Id User</label>
                <input type="text" id="id-product" readonly placeholder="Auto Number">
            </div>
            <div>
                <label for="name">Name</label>
                <input type="text" id="ipt-name" placeholder="Name" required>
            </div>
            <div>
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Username" required>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Email" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password" required>
            </div>
            <div>
                <label for="re-enter--password">Re-enter Password</label>
                <input type="password" id="re-enter--password" placeholder="Re-enter password" required>
            </div>
            <div>
                <input type="checkbox" id="role">           
                <label for="role">Admin</label>
            </div>
            <div class="btns">
                <button class="btn-reset">Reset</button>
                <button class="btn-submit">Add</button>
            </div>
        `
        popupForm.innerHTML = popup_content
    }  
}

const addNewRow = () => {
    const btn_addNew = document.querySelectorAll('.add')
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.btn-close');
    const overlay = document.querySelector('.overlay');
    btn_addNew.forEach(item=> {
        item.addEventListener('click',async () => {
            await addRow(item.name)
            setTimeout(()=>{
                resetForm()
                submitAdd(item.name)
            },500)
            popup.style.display = 'block';
            popup.style.top = `${(window.innerHeight - popup.offsetHeight) / 2}px`;
            popup.style.left = `${(window.innerWidth - popup.offsetWidth) / 2}px`;
            popup.style.position = 'fixed';
            popup.style.zIndex = '999';
            overlay.style.display = 'block';
        });
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });
    });
}

const resetForm = () => {
    const btnReset = document.querySelector('.btn-reset')
    const popupForm = document.querySelector('.popup--form')
    btnReset.addEventListener("click",(e) => {
        e.preventDefault()
        const popupInput = popupForm.querySelectorAll('input')
        const popupTextarea = popupForm.querySelectorAll('textarea')
        if(popupTextarea){
            popupTextarea.value = ""
        }
        popupInput.forEach(element => {
            element.value = ""
        });
    })
}

const submitAdd = (collection) => {
    const btn_submit = document.querySelector('.btn-submit')
    btn_submit.addEventListener("click",(e) => {
        document.querySelector('.popup--form').addEventListener(
            'submit',
            () => {
                if(collection === 'category'){
                    const cateData = firebase.loadData('categories')
                    cateData.then((cate) => {
                        console.log(cate.val().length);
                        const cateId = cate.val().length
                        const cateName = document.querySelector('#ipt-name').value
                        firebase.writeCategoryData(cateId,cateName)
                        document.querySelector('.alert').innerHTML = `<em style="color:red"> Add complete </em>`
                    })
                }else if(collection === 'product'){
                    const proData = firebase.loadData('products')
                    proData.then((pro) => {
                        const proId = pro.val().length
                        const cateId = Number(document.querySelector('#cateName').value)
                        const name = document.querySelector('#ipt-name').value
                        const price = Number(document.querySelector('#price').value)
                        const ipt_img = document.querySelector('#imgs').files
                        const feature = document.querySelector('#feature').value.split('.')
                        const desc = document.querySelector('#description').value
                        const imgs = []
                        for (let i = 0; i < ipt_img.length; i++) {
                            imgs.push(ipt_img[i]['name'])
                        }
                        firebase.writeProductData(proId,cateId,name,price,imgs,feature,desc)
                        document.querySelector('.alert').innerHTML = `<em style="color:red"> Add complete </em>`
                    })
                }else if(collection === 'user'){
                    const userData = firebase.loadData('users')
                    userData.then((user) => {
                        const userId = user.val().length
                        const name = document.querySelector('#ipt-name').value
                        const username = document.querySelector('#username').value
                        const email = document.querySelector('#email').value
                        const pass = document.querySelector('#password').value
                        const reEnterPass = document.querySelector('#re-enter--password').value
                        const admin = document.querySelector('#role')
                        const role = 0
                        if(pass !== reEnterPass){
                            document.querySelector('.alert').innerHTML = `<em style="color:red"> Re-Enter Password incorrect </em>`
                        }else{
                            console.log("ok");
                            if(admin.checked === true){
                                role = 1
                            }
                            firebase.writeUserData(userId,name,username,email,pass,role)
                            document.querySelector('.alert').innerHTML = `<em style="color:red"> Add complete </em>`
                        }
                    })
                }
            }
        )
    })
}

const editRow = (e) => {
    console.log(e.target);
    const BtnTarget = e.target
    const parentCell = e.target.parentElement
    const parentRow = e.target.parentElement.parentElement
    const allCells = parentRow.querySelectorAll('.input-cell')
    const textarea = parentRow.querySelector('textarea')
    const selecter = parentRow.querySelector('select')
    const iptsFile = parentRow.querySelectorAll('.productImgs--ipt')
    const labelImgs = parentRow.querySelectorAll('.labelImg')
    //UI
    parentRow.classList.add('hightlight')
    parentCell.innerHTML = 
    `
        <button class="admin-btn btn-save" name="${BtnTarget.name}" value="${BtnTarget.value}">SAVE</i></button>
    `
    allCells.forEach(cell => {
        if(!cell.classList.contains('productImgs') && !cell.classList.contains('proDate')){
            cell.contentEditable = true
        }
    });
    if(textarea){
        textarea.readOnly = false
    }
    if(selecter){
        selecter.disabled = false
    }
    if(iptsFile){
        iptsFile.forEach(ipt => {
            console.log(ipt);
            ipt.disabled = false
        });
        labelImgs.forEach(label => {
            label.classList.toggle('labelImgHover')
        });
    }
    submitEdit()
    removeRow()
}



const submitEdit = () => {
    const btnSave = document.querySelectorAll('.btn-save')
    btnSave.forEach(item => {
        item.addEventListener(
            'click',
            (e) => {
                const proId = Number(e.target.value)
                console.log(proId);
                const collectionName = e.target.name
                const parentCell = e.target.parentElement
                const parentRow = e.target.parentElement.parentElement
                const allCells = parentRow.querySelectorAll('.input-cell')
                const textarea = parentRow.querySelector('textarea')
                const selecter = parentRow.querySelector('select')
                const iptsFile = parentRow.querySelectorAll('.productImgs--ipt')
                const labelImgs = parentRow.querySelectorAll('.labelImg')
                //Data
                const currentProduct = firebase.loadData(`products`)
                .then((snap) => {
                    const product = snap.val()
                    .filter(pro => pro)
                    .find(pro => pro['id'] === proId)
                    console.log(product)
                    let ImgArr = []
                    if(product){
                        console.log(product['img']);
                        ImgArr = product['img'].filter(img => img)
                        console.log(ImgArr);
                    }
                    const keys = []
                    const values = []
                    allCells.forEach(item => {
                        keys.push(item.id)
                        if(item.querySelector('textarea')){
                            values.push(item.children[0].value)
                        }else if(item.querySelector('select')){
                            values.push(Number(item.children[0].value))
                        }else if(item.querySelector('.productImgs--ipt')){
                            iptsFile.forEach((ipt,i) => {
                                let [img] = ipt.files
                                if(img){
                                    ImgArr[i] = img['name']
                                }
                            })
                            values.push(ImgArr)
                        }else if(item.id == 'feature'){
                            let feature = item.innerText.split(",")
                            values.push(feature)
                        }else{
                            values.push(item.innerText)
                        }
                    })
                    if(keys.length !== 0){
                        firebase.updateData(collectionName,proId,keys,values)
                    }

                    //UI
                    console.log(keys);
                    console.log(values);
                    parentRow.classList.remove('hightlight')
                    parentCell.innerHTML = 
                    `
                        <button  class="admin-btn btn-edit" name="${collectionName}" value="${proId}"><i class="fa-solid fa-pencil"></i></button>
                        <button class="admin-btn btn-remove" name="${collectionName}" value="${proId}"><i class="fa-solid fa-trash"></i></button>
                    `
                    allCells.forEach(cell => {
                        cell.contentEditable = false
                    });
                    if(textarea){
                        textarea.readOnly = true
                    }
                    if(selecter){
                        selecter.disabled = true
                    }
                    if(iptsFile){
                        iptsFile.forEach(ipt => {
                            ipt.disabled = true
                        });
                        labelImgs.forEach(label => {
                            label.classList.toggle('labelImgHover')
                        });
                    }
                })
                .then(()=>{
                    const btns_edit = document.querySelectorAll('.btn-edit')
                    btns_edit.forEach(btn => {
                        btn.removeEventListener("click", editRow);
                    });
                    btns_edit.forEach(btn => {
                        btn.addEventListener("click", editRow);
                    });
                })
                .catch(error =>{
                    console.log(error);
                })
            }
        )
    });
    
}

const updateUiImg = () => {
    const iptFiles = document.querySelectorAll('input[type="file"]')
    iptFiles.forEach(item => {
        item.addEventListener(
            'change',
            (e) => {
                const iptId = e.target.id
                const parentElement = e.target.parentElement
                const [imgName] = e.target.files
                const labelImg = parentElement.querySelector(`label[for="${iptId}"]`)
                const representImgs = labelImg.querySelector('img')
                if(iptId=='productImg0'){
                    const firstImg = document.querySelector('img.productImg0')
                    firstImg.src = `assets/images/products/${imgName['name']}`
                }
                representImgs.src = `assets/images/products/${imgName['name']}`
            }
        )
    });
}

const admin = async () => {
    await loadUiData()
    setTimeout(
        () => {
            removeRow()
            addNewRow()
            // editRow()
            const btnEdits = document.querySelectorAll('.btn-edit')
            btnEdits.forEach(btnEdit => {
                btnEdit.addEventListener('click',editRow)
            });
            updateUiImg()
        },4000
    )
}
admin()
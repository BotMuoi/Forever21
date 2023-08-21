const change = document.querySelector(".changePW") as HTMLButtonElement
change.addEventListener("click", async ()=>{
    let currentPW = document.querySelector(".currentPW") as HTMLInputElement
    let newPW = document.querySelector(".newPW") as HTMLInputElement
    let cfPW = document.querySelector(".cfPW") as HTMLInputElement
    const urlRequest = new URLSearchParams(window.location.search)
    const id = urlRequest.get('id')
    const checkCurrentPw = await fetch(`http://localhost:3000/API/user/checkpw/${id}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password: currentPW.value})
    })
    const checkpw = await checkCurrentPw.json()
    if(!checkpw.notification){
        let tb= document.querySelector(".tbConfirm") as HTMLSpanElement
        tb.innerHTML=
        `
            Nhập mật khẩu cũ không chính xác
        `
    }else{
        if (newPW.value !== cfPW.value) {
            let tb= document.querySelector(".tbConfirm") as HTMLSpanElement
            tb.innerHTML=
            `
                Nhập lại mật khẩu không chính xác
            `
        }else{
            const changepw = await fetch(`http://localhost:3000/API/user/change/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({password: newPW.value})
            })
            const changepwNoti = await changepw.json()
            let tb= document.querySelector(".tbConfirm") as HTMLSpanElement
            tb.innerHTML= changepwNoti.notification
        }
    }
    
    
})









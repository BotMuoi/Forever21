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
const change = document.querySelector(".changePW");
change.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let currentPW = document.querySelector(".currentPW");
    let newPW = document.querySelector(".newPW");
    let cfPW = document.querySelector(".cfPW");
    const urlRequest = new URLSearchParams(window.location.search);
    const id = urlRequest.get('id');
    const checkCurrentPw = yield fetch(`http://localhost:3000/API/user/checkpw/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: currentPW.value })
    });
    const checkpw = yield checkCurrentPw.json();
    if (!checkpw.notification) {
        let tb = document.querySelector(".tbConfirm");
        tb.innerHTML =
            `
            Nhập mật khẩu cũ không chính xác
        `;
    }
    else {
        if (newPW.value !== cfPW.value) {
            let tb = document.querySelector(".tbConfirm");
            tb.innerHTML =
                `
                Nhập lại mật khẩu không chính xác
            `;
        }
        else {
            const changepw = yield fetch(`http://localhost:3000/API/user/change/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password: newPW.value })
            });
            const changepwNoti = yield changepw.json();
            let tb = document.querySelector(".tbConfirm");
            tb.innerHTML = changepwNoti.notification;
        }
    }
}));

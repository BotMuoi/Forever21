"use strict";
 
const loadInterface = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let message = ''
    if(urlParams.get('message')){
        message = urlParams.get('message');
    }
    console.log(message.length);
    document.body.insertAdjacentHTML('beforeend', `
  <div class="container">
  <!-- Sign Up -->
  <div class="container__form container--signup">
      <form action="/user/luu" class="form" id="form1" method="POST">
          <h2 class="form__title">Sign Up</h2>
          <input required type="text" name='fullname' placeholder="Full name" class="input" />
          <input required type="text" name='username' placeholder="User" class="input" />
          <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="email" name='email' placeholder="Email" class="input" />
          <input required type="password" name='password' placeholder="Password" class="input" />
          <button type="submit" class="btn">Sign Up</button>
      </form>
  </div>

  <!-- Sign In -->
  <div class="container__form container--signin">
      <form action="/user/dangnhap_" class="form" id="form2" method="POST">
          <h2 class="form__title">Sign In</h2>
          <span><b style="color:red;">${message}</b></span>
          <input required type="text" name="username" placeholder="Username" class="input" />
          <input  required type="password" name="password" placeholder="Password" class="input" />
          <a href="/user/forgotPW" style="color:${message.length>1&&message.length<13?"red":"black"}" class="link">Forgot your password?</a>
          <button class="btn">Sign In</button>
      </form>
  </div>

  <!-- Overlay -->
  <div class="container__overlay">
      <div class="overlay">
          <div class="overlay__panel overlay--left">
              <button class="btn" id="signIn">Sign In</button>
          </div>
          <div class="overlay__panel overlay--right">
              <button class="btn" id="signUp">Sign Up</button>
          </div>
      </div>
  </div>
</div>

`);
const signInBtn = document.getElementById('signIn');
const signUpBtn = document.getElementById('signUp');
const fistForm = document.getElementById('form1');
const secondForm = document.getElementById('form2');
const container = document.querySelector('.container');
signInBtn?.addEventListener('click', () => {
    container?.classList.remove('right-panel-active');
});
signUpBtn?.addEventListener('click', () => {
    container?.classList.add('right-panel-active');
});
// fistForm?.addEventListener('submit', (e) => e.preventDefault());
// secondForm?.addEventListener('submit', (e) => e.preventDefault());

}


const main = async () => {
    await loadInterface()
}

main()

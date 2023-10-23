const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const forgotLink=document.querySelector('.ForgotPass-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconclose=document.querySelector('.icon-close');


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

forgotLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});
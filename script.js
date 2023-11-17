const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const ForgotPassLink=document.querySelector('.ForgotPassword-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconclose=document.querySelector('.icon-close');


//Bấm vào để chuyển qua trang đăng ký
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

//Bấm vào để chuyển qua trang đổi mật khẩu
ForgotPassLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

//Bấm vào để chuyển qua trang đăng nhập
loginLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

//Chuyển đổi các trang
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

//Bấm vào để tắt trang đăng nhập
iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

//localStorage cho trang đăng ký lưu trữ thông tin

function signup() {
    // Lấy dữ liệu người dùng từ form
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
   


    // Kiểm tra dữ liệu người dùng
    if (email === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    // Chuyển đổi dữ liệu người dùng thành JSON
    const data = {
        email: email,
        password: password,
    };

    // Lưu dữ liệu người dùng vào Local Storage
    localStorage.setItem("data", JSON.stringify(data));  
 
    // Thông báo đăng ký thành công
    alert("Đăng ký thành công");
}
 

//localStorage cho trang đăng nhập truy xuất thông tin

function login() {
    // Lấy dữ liệu người dùng từ form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Kiểm tra dữ liệu người dùng
    if (email === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    // Lấy dữ liệu người dùng từ Local Storage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // So sánh dữ liệu người dùng
    if (email === storedEmail && password === storedPassword) {
        // Đăng nhập thành công
        alert("Đăng nhập thành công");
    } else {
        // Đăng nhập thất bại
        alert("Tài khoản hoặc mật khẩu không chính xác");
    }
}


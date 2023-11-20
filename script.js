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


//Kiểm tra tính hợp lệ của email
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}




//localStorage cho trang đăng ký lưu trữ thông tin

function signup() 
{
    // Lấy email từ input
    var email = document.getElementById('email').value;
  
    // Lấy mật khẩu từ input
    var password = document.getElementById('password').value;

    // Lấy xác nhận mật khẩu từ input
    var checkpassword = document.getElementById('checkpassword').value;


    //Kiểm tra email đã hợp lệ chưa 
    if (!validateEmail(email)) {
      alert("Email không hợp lệ");
      return;
    }
    
      // Tạo 1 đối tượng tài khoản mới
      var account = [{
        email: email,
        password: password,
        checkpassword: checkpassword
      }];
      
      // Kiểm tra tài khoản đã nằm trong localStorage chưa
      var accounts = JSON.parse(localStorage.getItem('accounts')) || [];

      //Thêm tài khoản mới vào mảng
      accounts.push(account);

      //Lưu tài khoản vào localStorage
      localStorage.setItem('accounts', JSON.stringify(accounts));
  
      
      if(password===checkpassword)
      {
      // Hiển thị thông báo thành công
      alert('Tài khoản đã tạo thành công.');
      return;
      }
      else
      {
        alert('Tài khoản đã tạo thất bại.');
        return;
      }
  } 


// Hàm giả định để lấy danh sách tài khoản từ Local Storage
function getStoredAccounts() {
  // Thực tế, bạn có thể lấy dữ liệu từ Local Storage bằng cách sử dụng localStorage.getItem()
  // Ví dụ: const storedData = localStorage.getItem("accounts");
  // Sau đó chuyển đổi chuỗi JSON thành mảng đối tượng.
  // Ở đây, tôi sử dụng một mảng giả định để minh họa.
  const storedData = localStorage.getItem("accounts");
  const accounts = JSON.parse(storedData) || [];
  return accounts;
}




//localStorage cho trang đăng nhập truy xuất thông tin

function login() {
  // Lấy dữ liệu người dùng từ form
  const gmail = document.getElementById("gmail").value;
  const firewall = document.getElementById("firewall").value;

  // Kiểm tra dữ liệu người dùng
  if (gmail === "" || firewall === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
  }

  // Lấy dữ liệu người dùng từ Local Storage hoặc một nguồn dữ liệu khác
  const accounts = getStoredAccounts();

  // Kiểm tra từng tài khoản
  let loggedIn = false;
  for (const account of accounts) {
      if (gmail === account.email && firewall === account.password) {
          // Đăng nhập thành công
          alert("Đăng nhập thành công");
          console.log(gmail);
          console.log(firewall);
          loggedIn = true;
          break; // Thoát khỏi vòng lặp khi tìm thấy tài khoản khớp
      }
  }

  if (!loggedIn) {
      // Đăng nhập thất bại
      alert("Tài khoản hoặc mật khẩu không chính xác");
  }
}





/*
var regex = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(regex.test(password)) {
  console.log("Password is valid");
} else {
  console.log("Password is invalid");
} */


/* 
function checkPassword(password) {
 var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
 return regex.test(password);
}
*/

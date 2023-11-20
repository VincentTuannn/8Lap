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
function validateEmail(email) 
{
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

//Kiểm tra độ mạnh yếu của email
function checkPassword(password) 
{
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return regex.test(password);
}


//Kiểm tra xác nhận mật khẩu có trùng khớp với mật khẩu khi ở trang đăng ký
function arePasswordsMatching(password, checkpassword) 
{
  // Kiểm tra xem mật khẩu và xác nhận mật khẩu có trùng khớp hay không
  return password === checkpassword;
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
    if (!validateEmail(email)) 
    {
      alert("Email không hợp lệ!");
      return;
    }

    //Kiểm tra mật khẩu mạnh hay yếu
    if (!checkPassword(password))
    {
      alert("Mật khẩu của bạn chưa đủ mạnh!");
      return;
    }

    //Kiểm tra độ trùng khớp giữa xác nhận mật khẩu và mật khẩu
    var passwordsMatch = arePasswordsMatching(password, checkpassword);

    if (!passwordsMatch) 
    {
      alert("Xác nhận mật khẩu chưa chính xác!");
      return;
    }
    
      // Tạo 1 đối tượng tài khoản mới
      var account = [{
        email: email,
        password: password,
        checkpassword: checkpassword,
        role: 'user'
      }];
      
      // Kiểm tra tài khoản đã nằm trong localStorage chưa
      var accounts = JSON.parse(localStorage.getItem('users')) || [];

      //Thêm tài khoản mới vào mảng
      accounts.push(account);

      //Lưu tài khoản vào localStorage
      localStorage.setItem('users', JSON.stringify(accounts));
  
      
      if(password===checkpassword)
      {
      // Hiển thị thông báo thành công
      alert('Tài khoản đã tạo thành công');
      return;
      }
      else
      {
        alert('Tài khoản đã tạo thất bại');
        return;
      }
  } 












//localStorage cho trang đăng nhập truy xuất thông tin

function login() 
{
  // Lấy dữ liệu người dùng từ form
  var email1 = document.getElementById("gmail").value;
  var password1 = document.getElementById("firewall").value;


  // Kiểm tra từ localstorage
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Tìm email và mật khẩu trong localstorage
  var loggedInUser = users.find(user => user.email === email1 && user.password === password1);
    
  // Kiểm tra từng tài khoản
  if (loggedInUser) {
  
      alert(`Đăng nhập thành công! Chào mừng ${loggedInUser.role === 'admin' ? 'Admin' : 'Người dùng'}`);
      console.log(email1);
      console.log(password1);
  } else {
    
      alert("Tài khoản hoặc mật khẩu không chính xác!");
  }
}

const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const forgotLink=document.querySelector('.ForgotPass-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconclose=document.querySelector('.icon-close');

//Bấm vào để chuyển qua trang đăng ký
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

//Bấm vào để chuyển qua trang đổi mật khẩu
forgotLink.addEventListener('click',()=>{
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
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

//Lưu thông tin vào Google Sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxB15U7Kbo0aXM7zySVriG6WpOYDw_KcahhRkF0vPNTrIZ84BTGum0ptlIWr_RxJpvp/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

// Đăng ký sự kiện submit cho biểu mẫu
  document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Lấy giá trị từ các trường nhập liệu
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Kiểm tra xem `localStorage` đã được hỗ trợ trong trình duyệt
    if (typeof (Storage) !== 'undefined') {
        // Lưu thông tin tài khoản vào `localStorage`
        localStorage.setItem('username', username);
        localStorage.setItem('username', email);
        localStorage.setItem('password', password);

        alert('Tài khoản đã được đăng ký thành công.');

        // Xóa giá trị khỏi các trường nhập liệu
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    } else {
        alert('Trình duyệt không hỗ trợ localStorage.');
    }
});

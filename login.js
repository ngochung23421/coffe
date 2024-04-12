const EmailLogin = document.querySelector(".inputId");
const PasswordLogin = document.querySelector(".input");

const btnLogin = document.querySelector(".submit");


btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    if (EmailLogin.value === "" || PasswordLogin.value === "") {
        alert("Please enter Email or Password")
    }

    else{
        var user = JSON.parse(localStorage.getItem(EmailLogin.value));

        if(
            user.email === EmailLogin.value &&
            user.password === PasswordLogin.value)
            {
                window.location.pathname = "index.html";
        }
        else{
            alert("Invalid email or password!!")
        }
    }
})



// checkbox.addEventListener('change', function() {
//     if (this.checked) {
//         // Lưu tài khoản và mật khẩu vào localStorage khi người dùng chọn tùy chọn "Save"
//         localStorage.setItem('savedEmail', EmailLogin.value);
//         localStorage.setItem('savedPassword', PasswordLogin.value);
//     } else {
//         // Xóa tài khoản và mật khẩu từ localStorage khi người dùng bỏ chọn tùy chọn "Save"
//         localStorage.removeItem('savedEmail');
//         localStorage.removeItem('savedPassword');
//     }
// });

// // Kiểm tra xem có tài khoản và mật khẩu được lưu trong localStorage hay không
// window.addEventListener('load', function() {
//     const EmailLogin = localStorage.getItem('savedEmail');
//     const PasswordLogin = localStorage.getItem('savedPassword');

//     if (savedEmail && savedPassword) {
//         // Đặt giá trị của input email và password thành tài khoản và mật khẩu đã lưu
//         emailInput.value = savedEmail;
//         passwordInput.value = savedPassword;
//         // Đồng thời đảm bảo rằng checkbox được đánh dấu là đã chọn
//         checkbox.checked = true;
//     }
// });

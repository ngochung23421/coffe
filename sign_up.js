var emailSignUp = document.querySelector(".input-signup-username");
var passwordSignUp = document.querySelector(".input-signup-password");
var btnSignUp = document.querySelector(".signup__signInButton");

btnSignUp.addEventListener("click", function () {
    if (emailSignUp.value === "" || passwordSignUp.value ===""){
        alert("Please enter email and password");

    }
    else{
        var user = {
            email: emailSignUp.value,
            password: passwordSignUp.value,
            
        }
        
        
    }
    let jsonUser = JSON.stringify(user);
    localStorage.setItem(emailSignUp.value, jsonUser);
    // e.preventDefault();
    // alert("success");
    // alert(emailSignUp.value);
    // alert(passwordSignUp.value);
})
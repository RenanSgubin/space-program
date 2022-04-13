

function changeRegisterLink() {

    //Alterar o register link
    document.getElementsByClassName("register-link")[0].style.backgroundColor = "#1a1a1a";
    document.getElementsByClassName("register-link")[0].style.boxShadow = "8px 5px 16px -7px #1e1cb8";
    document.getElementsByClassName("register-link")[0].style.opacity = "1";
    document.getElementsByClassName("register-link")[0].style.color = "#e2e2e2";
    
    document.getElementsByClassName("register-content")[0].style.bottom = "0%";

    //Alterar o login link
    document.getElementsByClassName("login-link")[0].style.backgroundColor = "#e9e8e8";
    document.getElementsByClassName("login-link")[0].style.boxShadow = "none";
    document.getElementsByClassName("login-link")[0].style.opacity = "0.7";
    document.getElementsByClassName("login-link")[0].style.color = "#1e1e1e";

    document.getElementsByClassName("login-content")[0].style.position = "absolute";
    document.getElementsByClassName("login-content")[0].style.bottom = "150%";

}

function changeLoginLink() {

    //Alterar o login link
    document.getElementsByClassName("login-link")[0].style.backgroundColor = "#1a1a1a";
    document.getElementsByClassName("login-link")[0].style.boxShadow = "8px 5px 16px -7px #1e1cb8";
    document.getElementsByClassName("login-link")[0].style.opacity = "1";
    document.getElementsByClassName("login-link")[0].style.color = "#e2e2e2";

    document.getElementsByClassName("login-content")[0].style.bottom = "0%";

    //Alterar o register link
    document.getElementsByClassName("register-link")[0].style.backgroundColor = "#e9e8e8";
    document.getElementsByClassName("register-link")[0].style.boxShadow = "none";
    document.getElementsByClassName("register-link")[0].style.opacity = "0.7";
    document.getElementsByClassName("register-link")[0].style.color = "#1e1e1e";
    
    document.getElementsByClassName("register-content")[0].style.bottom = "150%";

}
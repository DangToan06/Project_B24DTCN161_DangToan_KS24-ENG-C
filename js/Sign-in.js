let btnSign = document.getElementById("btn-Sign-in");
let boxCorrect = document.getElementById("sign-in-successfully");
let boxIncorrect = document.getElementById("sign-in-failed");
let btnError = document.getElementById("btn-delete");
let accountNow;

let emailCorrect = [];
let passwdCorrect = [];
let accountCorrect = JSON.parse(localStorage.getItem("User"));

// console.log(accountCorrect.);


accountCorrect.forEach(element => {
    emailCorrect.push(element.email);
    passwdCorrect.push(element.password);
});

btnError.addEventListener("click", function(){
    boxIncorrect.style.display = "none";
});

btnSign.addEventListener("click", function () {
    let emailValue = document.getElementById("sign-in-email").value;
    let passwd = document.getElementById("sign-in-passwd").value;
    let box = document.getElementById("flexCheckDefault");
    if (validEmail(emailValue, emailCorrect) &&
        validPasswd(passwd, passwdCorrect) &&
        isValidAccount(emailValue, passwd)) {
        boxCorrect.style.display = "block";
            
        for (let i = 0; i < accountCorrect.length; i++) {
            if (emailValue === accountCorrect[i].email && passwd === accountCorrect[i].password) {
                accountNow = accountCorrect[i];
            }
        }

        localStorage.setItem("AccountNow", JSON.stringify(accountNow));
        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5500/pages/HomePage.html";
        }, 500);
    } else {
        boxIncorrect.style.display = "block";
        setTimeout(() => {
            boxIncorrect.style.display = "none";
        }, 3000);
    }
});

function validEmail(email, emailCorrect) {
    if (email === "") {
        return 0;
    }
    let regex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9]+\.(com)$/;
    if (regex.test(email)) {
        for (let i = 0; i < emailCorrect.length; i++) {
            if (email === emailCorrect[i]) {
                return 1;
            }
        }
    }
}

function validPasswd(passwd, passwdCorrect) {
    if (passwd === "") {
        return 0;
    }
    for (let i = 0; i < passwdCorrect.length; i++) {
        if (passwd === passwdCorrect[i]) {
            return 1;
        }
    }
}

function isValidAccount(email, passwd) {
    return accountCorrect.some(user => user.email === email && user.password === passwd);
}
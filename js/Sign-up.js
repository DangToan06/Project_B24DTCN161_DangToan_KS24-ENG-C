let signUp = document.getElementById("btn-sign-up");
let boxCorrect = document.getElementById("sign-in-successfully");
let boxIncorrect = document.getElementById("sign-in-failed");
let btnError = document.getElementById("btn-delete");
let emailExist = [];
let passwdExist = [];
let idExist = [];
let person = [];
let myFood = [];
let accountExist = JSON.parse(localStorage.getItem("User"));

if(accountExist === null){
    localStorage.setItem("User",JSON.stringify(users));
}

accountExist.forEach(element => {
    emailExist.push(element.email);
    passwdExist.push(element.password);
    idExist.push(element.id);
    person.push(element.personalization);
});

signUp.addEventListener("click", function () {
    let emailValue = document.getElementById("sign-up-email").value;
    let userValue = document.getElementById("user-name").value;
    let passwdValue = document.getElementById("sign-up-passwd").value;

    if (validEmail(emailValue, emailExist) && validUser(userValue) && validPasswd(passwdValue, passwdExist)) {
        boxCorrect.style.display = "block";      
        let id = Math.max(...idExist) + 1;
        if(id === null){
            id = 1;
        }
        console.log(id);
        
        accountExist.push(new User(id, emailValue, userValue, passwdValue, personalization, myFood));
        localStorage.setItem("User", JSON.stringify(accountExist));

        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5500/pages/Sign-in.html";
        }, 500);
    } else {
        boxIncorrect.style.display = "block";
        setTimeout(() => {
            boxIncorrect.style.display = "none";
        }, 3000);
    }
});

function validEmail(email, emailExist) {
    if (email === "") {
        return 0;
    }
    let regex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9]+\.(com)$/;
    if (regex.test(email)) {
        for (let i = 0; i < emailExist.length; i++) {
            if (email === emailExist[i]) {
                return 0;
            }
        }
    }
    return 1;
}

function validUser(user) {
    if (user === "") {
        return 0;
    }
    return 1;
}

function validPasswd(passwd, passwdExist) {
    if (passwd.length < 8) {
        return 0;
    }
    for (let i = 0; i < passwdExist.length; i++) {
        if (passwd === passwdExist[i]) {
            return 0;
        }
    }
    return 1;
}
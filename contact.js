var username = document.getElementById("name");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var pwd = document.getElementById("password");
var cnfrmpwd = document.getElementById("cnfrmpassword");
const form = document.querySelector("#form");

username.addEventListener("input", function () {
    if (username.value == "")
        document.getElementById("nametxt").style.display = "none";

    else
        document.getElementById("nametxt").style.display = "block";

});

phone.addEventListener("input", function () {
    if (phone.value == "")
        document.getElementById("phn").style.display = "none";

    else
        document.getElementById("phn").style.display = "block";
});
email.addEventListener("input", function () {
    if (email.value == "")
        document.getElementById("mail").style.display = "none";

    else
        document.getElementById("mail").style.display = "block";
})

pwd.addEventListener("input", function () {
    if (pwd.value == "")
        document.getElementById("pwd").style.display = "none";

    else
        document.getElementById("pwd").style.display = "block";
})

cnfrmpwd.addEventListener("input", function () {
    if (cnfrmpwd.value == "")
        document.getElementById("confrmpwd").style.display = "none";

    else
        document.getElementById("confrmpwd").style.display = "block";
})

var gndr = document.querySelectorAll(".mfale");

// regex
let cusername = /^([A-Za-z ]{3,20})$/;
let phn = /^[7-9][0-9]{9}$/;
let ml = /^([a-zA-Z\.-_]+){5,15}@([a-zA-Z0-9-]+){5,9}.([a-z]){3}$/;
let passwd = /^([A-Za-z0-9@.-_]+){8,15}$/;
// let passwd=/^([a-zA-Z0-9_@]){8,20}$/;
function validateform() {

   let flag = 1;
    if (!cusername.test(username.value))
    {
        document.getElementById("name-error").innerHTML = "**Username must contain at least 3 characters";
        // return false;
        flag = 0;
    }
    else {
        document.getElementById("name-error").innerHTML = "";
    
    }

    if (gndr[0].checked == false && gndr[1].checked == false) {
        document.getElementById("gender-error").innerHTML = "**Select your Gender";
        // return false;
        flag = 0;
    }
    else {

        document.getElementById("gender-error").innerHTML = "";

    }

    if (!phn.test(phone.value)) {
        document.getElementById("phone-error").innerHTML = "**Phone no must be of 10 digits only";
        flag = 0;
    }
    else {
        document.getElementById("phone-error").innerHTML = "";

    }
    if (!ml.test(email.value)) {
        document.getElementById("mail-error").innerHTML = "**Invalid email id";
        flag = 0;
        // return false;
    }
    else {
        document.getElementById("mail-error").innerHTML = "";

    }
    if (!passwd.test(pwd.value)) {
        document.getElementById("pwd-error").innerHTML = "**Password must be of at least 8 digits.";
        flag = 0;

    }
    else {
        
        document.getElementById("pwd-error").innerHTML = "";

    }
    if (pwd.value != cnfrmpwd.value) {
        document.getElementById("confrmpwd-error").innerHTML = "**Passwords not matching.";
        // return false;
        flag = 0;
    }
    else {
        document.getElementById("confrmpwd-error").innerHTML = "";

    }

    function display()
    {

        document.getElementById("success").style.display = "block";
        console.log(username.value);
        console.log(document.querySelector("input[name='gender']:checked"));
        console.log(document.getElementById("branch").value);

         console.log(phone.value);
        console.log(email.value);
        console.log(pwd.value);
        // console.log(cnfrmpwd.value);

        var close = document.getElementById("close");
        close.addEventListener("click", (e)=> {
            // e.preventDefault();
        document.getElementById("success").style.display = "none";
            return true;
            
        });
       
        return false;
     
    }

    if (flag == 0) {
        return false;
    }
    else {
        return display();
        
    }

  

};
// form.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     return validateform();

// });  
onsubmit = () => {
    return validateform();
}
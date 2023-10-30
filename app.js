const FORM = document.forms[0];
const ERROR = FORM.querySelector(".email_input .error");
const BTN = FORM.querySelector("button");
FORM.addEventListener("submit", (e)=>{
    e.preventDefault();
    let email_input = FORM.querySelector("#email").value;
    let regExp = /\w@gmail.com$/;
    let validation = regExp.test(email_input);
    if(validation==false){
        ERROR.style.display = "block";
        BTN.textContent = "Notify me"
        BTN.style.background = "hsl(223, 87%, 63%)";
    }else{
        ERROR.style.display = "none";
        BTN.textContent = "Successful"
        BTN.style.background = "hsla(145, 100%, 66%, 0.61)";
    }
});

console.log(this);



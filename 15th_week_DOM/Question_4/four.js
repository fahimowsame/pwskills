let name = document.querySelector("#name");
let password = document.querySelector("#password");
let submit = document.querySelector("#submit");


submit.addEventListener("click", (event) => {
    event.preventDefault();
    if(name.value.length >= 3 && password.value.length >= 8){
        alert("Form Validation succesfull");
    }else{
        alert("Form Validation Failed!");
    }
})
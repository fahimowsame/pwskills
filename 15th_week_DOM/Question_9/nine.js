let logIn = document.querySelector("#login");
let logOut = document.querySelector("#logout");
let heading = document.querySelector("#heading");

logIn.addEventListener("click", () => {
    localStorage.setItem("fahim", true);
    window.location.reload();
});

logOut.addEventListener("click", () => {
    localStorage.setItem("fahim", false);
    window.location.reload();
});

let logInStatus = localStorage.getItem("fahim");

if(logInStatus === "true"){
    heading.innerHTML = "user has Logged in"
}else{
    heading.innerHTML = "user has  logged out"
}
let button = document.querySelector("#button");
let para = document.querySelector("#para");


let curentMode = "light";

button.addEventListener("click", () => {
    if (curentMode === "light"){
        curentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        para.style.color = "white"
    }else{
        curentMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        para.style.color = "black"
        para.innerHTML = "This is Dark Mode"
    }

    console.log(curentMode);
})
let button = document.querySelector("#btn");
let image = document.querySelector("#image");
let heading = document.querySelector("#heading");

let currMode = "hidden";

button.addEventListener("click", () => {
    if(currMode === "hidden"){
        currMode = "visible";
        image.style.opacity = 1;
        heading.innerHTML = "Your Image is visible"
    }else{
        currMode = "hidden";
        image.style.opacity = 0;
        heading.innerHTML = "Your Image is hidden"
    }
    console.log(currMode);
})
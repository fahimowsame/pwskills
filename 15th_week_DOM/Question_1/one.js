let fileTracker = document.querySelector("#choose_file");
let image = document.querySelector("#image");


function profileChange (){
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
        image.src = event.target.result;
    }
    fileReader.readAsDataURL(fileTracker.files[0]);
}
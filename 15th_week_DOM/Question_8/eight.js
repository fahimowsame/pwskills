let date = document.querySelector("#container");

function updateBackground() {
    let time = new Date();
    let hours = time.getHours().toString().padStart(2, '0');
    let minutes = time.getMinutes().toString().padStart(2, '0');
    let seconds = time.getSeconds().toString().padStart(2, '0');
    let hexColor = `#${hours}${minutes}${seconds}`;

    date.innerHTML = time.toLocaleTimeString();

    document.body.style.backgroundColor = hexColor;
}

setInterval(updateBackground, 1000);
updateBackground();

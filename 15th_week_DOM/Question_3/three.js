let button1 = document.querySelector("#btn_1");
let button2 = document.querySelector("#btn_2");
let para = document.querySelector("#increament");


button1.addEventListener("click", function increament() {
    para.innerHTML++;
})

button2.addEventListener("click", function decreament () {
    if (para.innerHTML > 0){
        para.innerHTML--;
    }else{
        alert("Counter is going beyond 0 ");
    }
})
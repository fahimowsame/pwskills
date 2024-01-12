let container = document.querySelector("#container");


let heading = document.createElement("h2");
heading.innerHTML = "Which is Your Favorite Programming Language : "
let elementOptions = ["Javascript", "Java", "Python", "c++"];
let select = document.createElement("select");


elementOptions.map((data) => {
    let option = document.createElement("option");
    option.innerText = data;

    select.appendChild(option);
  });

  heading.appendChild(select);
  container.appendChild(heading);
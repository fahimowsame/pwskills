let name = "Mithun";
let email = "mithun123@gmail.com";
let age = "21";

if (typeof name !== "string") {
    console.log ("Name should be a string");
}

else if ( typeof email !== "string") {
    console.log ("Email should be a string");
}
else if (typeof age !== Number) {
    console.log ("Age shoud be a number")
}
else {
    console.log("you can submit it")
}


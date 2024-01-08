const car = {
    make : "Land Rover",
    model : "Defender",
    year : 2023
};

function objectHas (object, propertyName){
    return object.hasOwnProperty(propertyName);
}

console.log(objectHas(car, "make"));
console.log(objectHas(car, "price"));
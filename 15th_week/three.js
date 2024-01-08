const car = {
    make : "Land Rover",
    model : "Defender",
    year : 2023
};

function objectProperties (car){
    const totalObject = Object.keys(car);
    return totalObject.length;
}

const result = objectProperties(car);
console.log(result);
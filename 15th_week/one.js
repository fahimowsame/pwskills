let car = {
    make : "Land Rover",
    model : "Defender",
    year : 2023
};

function carProperties(car) {
    for (const property in car) {
    console.log(`${property}: ${car[property]}`);
    }
}
carProperties(car)
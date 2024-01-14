const items = [
    {
        name: "Apple Iphone",
        price: 500,
    },
    {
        name: "Macbook Laptop",
        price: 9000
    },
    {
        name: "Apple Ipad",
        price: 300
    }
];

let INRValue = 80;

function convertUSDtoINR(price) {
    return price * INRValue;
}

const priceInINR = items.map((item) => {
    return {
        name: item.name,
        price: item.price,
        INRprice: convertUSDtoINR(item.price)
    };
});

console.log(priceInINR);

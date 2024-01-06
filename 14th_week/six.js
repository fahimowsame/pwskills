const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
  };


const allValue = Object.keys(productDetails);
console.log("Below are the product details.");
for (let i = 0; i < allValue.length; i++){
    console.log(`${allValue[i]} : ${productDetails[allValue[i]]}`)
}
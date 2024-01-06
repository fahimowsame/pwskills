const products = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Laptop Bag", price: 20000 },
  { name: "Watch", price: 20000 },
  { name: "Mobile Charger", price: 1500 }
];

function findHighestAndLowestPrice(products) {
  let highest = products[0];
  let lowest = products[0];

  for (let i = 0; i < products.length; i++) {
    if (products[i].price > highest.price) {
      highest = products[i];
    }
    if (products[i].price < lowest.price) {
      lowest = products[i];
    }
  }

  return {highest,lowest};
}


let finalPrice = findHighestAndLowestPrice(products)
console.log(`The product with maximum amount is ${finalPrice.highest.name} which is priced at Rs. ${finalPrice.highest.price}`);
console.log(`The product with minimum amount is ${finalPrice.lowest.name} which is priced at Rs. ${finalPrice.lowest.price}`);

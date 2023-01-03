const weights = [
  { weight: 12, price: 4 },
  { weight: 1, price: 2 },
  { weight: 4, price: 10 },
  { weight: 1, price: 1 },
  { weight: 2, price: 2 }
];

weights.sort((a, b) => (a.price / a.weight) < (b.price / b.weight));

let totalWeight = 0;
let totalPrice = 0;

for (const weight of weights) {
  if (totalWeight + weight.weight <= 15) {
    totalWeight += weight.weight;
    totalPrice += weight.price;
  }
}

console.log(totalPrice);
console.log(totalWeight);

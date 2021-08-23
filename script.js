function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozarella"],
  ["pepperoni", "sausage"]
);

console.log(pizza1);

var pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozarella", "feta"],
  ["mushrooms", "olives", "onions"]
);

console.log(pizza2);

var pizza3 = pizzaOven(
  "thin crust",
  "alfredo",
  ["provolone"],
  ["pineapple", "sausage"]
);

var pizza4 = pizzaOven(
  "thin crust",
  "marinara",
  ["cheddar"],
  ["pineapple", "olives"]
);

var crustTypes = ["deep dish", "thin crust", "hand tossed"];
var sauceType = ["alfredo", "marinara", "traditional"];
var cheeses = ["mozarella", "cheddar", "provolone"];
var toppings = ["pepperoni", "mushrooms", "olives", "pineapple", "sausage"];

function randomRange(max, min) {
  return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
  var i = Math.floor(arr.length * Math.random());
  return arr[i];
}

function pizzaRandom() {
  var pizza = {};
  pizza.crustType = randomPick(crustTypes);
  pizza.sauceType = randomPick(sauceType);
  pizza.cheeses = randomPick(cheeses);
  pizza.toppings = randomPick(toppings);
  return pizza;
}
console.log(pizzaRandom());

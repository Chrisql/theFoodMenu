let pDrinkItem = document.querySelector("#drinkItem");
let pFoodItem = document.querySelector("#fooditem");

let theDrinks = prompt("Pick a drink\nSprite(1)\nPepsi(2)\nCoca-Cola(3)");

let theFood = prompt("Pick a food choice\nChicken Combo Meal(1)\nFried Rice(2)\nMashed Potatoes(3)");

const theMenu = {
drink_items: [
"Sprite",
"Pepsi",
"Coca-Cola"
],
food_items: [
"Chicken Combo Meal",
"Fried Rice",
"Mashed Potatoes"
]
}

if(theDrinks == 1){//if 1 is picked then logs sprite into the console
console.log(theMenu.drink_items[0]);
pDrinkItem.innerText = "Your food item: Sprite";
}
else if(theDrinks == 2){//if 2 is picked then logs pepsi into the console
console.log(theMenu.drink_items[1]);
pDrinkItem.innerText = "Your food item: Pepsi";
}
else if(theDrinks == 3){//if 3 is picked then logs coca-cola into the console
console.log(theMenu.drink_items[2]);
pDrinkItem.innerText = "Your food item: Coca-Cola";
}

if(theFood == 1){
console.log(theMenu.food_items[0]);
pFoodItem.innerText = "Your food item: Chicken Combo Meal";
}
else if(theFood == 2){
console.log(theMenu.food_items[1]);
pFoodItem.innerText = "Your food item: Fried Rice";
}
else if(theFood == 3){
console.log(theMenu.food_items[2]);
pFoodItem.innerText = "Your food item: Mashed Potatoes";
}

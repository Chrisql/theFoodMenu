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

if(theDrinks == 1){
console.log(theMenu.drink_items[0]);
}else if(theDrinks == 2){
console.log(theMenu.drink_items[1]);
}else if(theDrinks == 3){
console.log(theMenu.drink_items[2]);
}

if(theFood == 1){
console.log(theMenu.food_items[0]);
}else if(theFood == 2){
console.log(theMenu.food_items[1]);
}else if(theFood == 3){
console.log(theMenu.food_items[2]);
}

var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var run = 0;
// while
console.log("while loop\n");
while(run < ingredients.length){
  console.log(ingredients[run]);
  run++;
}
console.log("\nfor-loop\n");
// for-loop
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("\nfor-loop backwards\n");
// backwards for-loop
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
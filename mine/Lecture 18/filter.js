var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5Filter(value) {
    return value > 5;
};

var filteredNumberArray = numberArray.filter(above5Filter);
console.log("Filtered number array is:", filteredNumberArray);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Shopping List: ", shoppingList);

var searchvalue = "Bismol";
function containsFilter(value) {
    //console.log(value.indexOf(searchvalue));
    return value.indexOf(searchvalue) !== -1;
};

var searchedShoppingList = shoppingList.filter(containsFilter);
console.log("Searched shopping list: ", searchedShoppingList);
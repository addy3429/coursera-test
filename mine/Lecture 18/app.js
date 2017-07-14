(function () {
'use strict';

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var shoppingList2 = [
    {
        name: "Adam",quantity: "51"
    },
    {
        name:"Bulma", quantity: "44"
    },
    {   
        name: "Kakarot", quantity: "9001"
    },
    {
        name: "Trunks", quantity: "62"
    }
    
];
angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
    $scope.shoppingList = shoppingList;
    $scope.shoppingList2 = shoppingList2;
}

})();

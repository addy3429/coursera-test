(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
ToBuyController.$inject = ['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;
    
    buyList.list = ShoppingListCheckOffService.getList1();
    
    buyList.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    
    boughtList.list = ShoppingListCheckOffService.getList2();
}    

function ShoppingListCheckOffService () {
    var service = this;
    
    var list1 = [
    {
        name: "Cookies", 
        quantity: "10" 
    },
    {
        name: "Chips", 
        quantity: "5" 
    },
    {
        name: "Sugary Drinks", 
        quantity: "8" 
    },
    {
        name: "Crackers", 
        quantity: "12"
    },
    {
        name: "Peanut Butter", 
        quantity: "1" 
    }
    ];   

    var list2 = [];
    
    service.getList1 = function () {
        return list1;
    }
    
    service.getList2 = function () {
        return list2;
    };
    
    service.buyItem = function (itemIndex) {
        
        var item = {
            name: list1[itemIndex].name,
            quantity: list1[itemIndex].quantity
        };
        list2.push(item);
        list1.splice(itemIndex, 1); 
    };
}
    
}) ();
(function () {
 'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
    var ddo = {
        templateUrl: 'founditems.html',
        scope: {
            foundry: '<',
            onRemove: '&',
            empty: '='
        }
    }
    return ddo;
} 

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrow = this;
    
    narrow.searchTerm = '';
    narrow.found = [];
    narrow.emptyMessage = '';
    narrow.empty = false;
    
    narrow.search = function() {
        
        if (narrow.searchTerm === '') {
            narrow.isEmpty();
        }
        else {
            var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
            
            promise.then(function (response) {
                narrow.found = response;
                if(narrow.found.length === 0) {
                   narrow.isEmpty();
                   }
                else {
                    narrow.empty = false;
                }
            })
            .catch(function (error) {
                console.log("Something went terribly & really wrong!");
            });
            
        }
    }
    
    narrow.remove = function(itemIndex) {
        return MenuSearchService.removeItem(itemIndex);
    }
    
    narrow.isEmpty = function () {
        narrow.empty = true;
        narrow.emptyMessage = MenuSearchService.empty();
        console.log(narrow.emptyMessage)
    }
    
}

    
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
    var service = this;
    var emptyMessage = "Nothing Found";
    var foundItems = [];
    
    service.getMatchedMenuItems = function (searchTerm) {

        foundItems = [];
        var search = searchTerm.toLowerCase();
        
        return $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/menu_items.json")    
        }).then(function (response) {
            for (var i = 0; i < response.data.menu_items.length; i++) {
                if (response.data.menu_items[i].description.toLowerCase().indexOf(search) !== -1) {
                    foundItems.push(response.data.menu_items[i]);
                }
            }       
            
            return foundItems;
            
        }).catch(function (error) {
                console.log("Something went terribly wrong!");
        })
    };
    
    service.removeItem = function (itemIndex) {
        foundItems.splice(itemIndex, 1);
        return foundItems;
    }
    
    service.empty = function() {
        return emptyMessage;
    }
}
    
    
}) ();
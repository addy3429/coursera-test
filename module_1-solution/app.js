(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.food = "";
    
  $scope.check = function () {
      var foodArray = $scope.food.split(",")
      if (foodArray.length <= 3) {
          $scope.checkResponse = "Enjoy!";
      }
      else {
          $scope.checkResponse = "Too much!";   
      }
  };

};

})();

(function () {
'use strict';
    
angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope) {
    $scope.name = "Aditya";
    $scope.sayHello = function () {
        return "Hello Coursera!!"
    };
});


    
})();
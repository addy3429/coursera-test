(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('love', LoveFilter)
.filter('truth', TruthFilter)

MsgController.$inject = ['$scope', loveFilter];
function MsgController($scope, loveFilter) {
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    return msg;
  };
    
  $scope.sayLoveMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    msg = loveFilter(msg);
    return msg;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

function LoveFilter() {
    return function (input){
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
    };
};
    
function TruthFilter() {
    return function (input, target, replace){
        input = input || "";
        input = input.replace(target, replace);
        return input;
    };
};    
})();

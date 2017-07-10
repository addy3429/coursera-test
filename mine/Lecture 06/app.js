(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope) {
    
    $scope.name="";
    $scope.totalValue = 0;
    
    $scope.DisplayNumeric = function () {
        
        var TotalValueName = CalculateNumericForString($scope.name);
        $scope.totalValue = TotalValueName;
    };
    
    function CalculateNumericForString(string) {
        var TotalStringValue = 0;
        for (var i=0; i < string.length; i++){
            TotalStringValue += string.charCodeAt(i);
        }
        
        return TotalStringValue;
    };
    
});



})();

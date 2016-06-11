/**
 * Created by ajt on 6/9/2016.
 */
var app = angular.module("fizzBuzz", []);


app.controller('fizzCtrl', function($scope){
    $scope.startFizzBuzz = function() {
        for(var i = 1, msg="";i<=100;i++, msg=""){
            if (!(i%3)) msg+="Fizz";
            if (!(i%5)) msg+="Buzz";
            console.log(msg || i);
        }
    }
});
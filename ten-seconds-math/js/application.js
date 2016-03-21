// Your Code Here
var app = angular.module('10SecondsMath', []);

app.controller('ClockCtrl', ['$scope', '$interval', function($scope, $interval){
  var countDown;
  var generateRandom = function (max) {
    max = max || 10;
    return Math.floor(Math.random() * max + 1);
  };
  var createInterval = function () {
    return $interval(function(){
      $scope.secondsLeft--;
      if ($scope.secondsLeft === 0) {
        $scope.gameover = true;
        $interval.cancel(countDown);
      }
    }, 1000);
  };
  $scope.evalAnswer = function () {
    if ($scope.userInput == $scope.num1 + $scope.num2) {
      if ($scope.started === false) {
        countDown = createInterval();
        $scope.started = true;
      }
      $scope.points++;
      $scope.secondsLeft++;
      $scope.num1 = generateRandom();
      $scope.num2 = generateRandom();
      $scope.userInput = '';
    }
  };

  $scope.init = function () {
    $scope.started = false;
    $scope.gameover = false;
    $scope.points = 0;
    $scope.secondsLeft = 2;
    $scope.num1 = generateRandom();
    $scope.num2 = generateRandom();
  };

  $scope.init();
}]);
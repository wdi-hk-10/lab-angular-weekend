// Your Code Here
var app = angular.module('ShoppingCart',[]);

app.controller('CartCtrl', ['$scope', function($scope){
  $scope.lists = [
    {
      name: "apple",
      price: 1.99,
      quantity: 5
    }
  ];

  $scope.removeItem = function (index) {
    $scope.lists.splice(index, 1);
  };

  $scope.addItem = function () {
    $scope.lists.push({
      name: $scope.newItem.name,
      price: $scope.newItem.price,
      quantity: 0
    });
    $scope.newItem = {};
  };

  $scope.total = function () {
    var total = 0;
    $scope.lists.forEach(function(elem){
      total += elem.price * elem.quantity;
    });
    return total;
  };
}]);

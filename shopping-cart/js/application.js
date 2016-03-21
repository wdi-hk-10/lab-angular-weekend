// Your Code Here
var app = angular.module('ShoppingCart', []);

app.controller('CartCtrl', ['$scope', function($scope){
  $scope.lists = {
    'apple': {
      price: 1.99,
      quantity: 10
    },
    'orange': {
      price: 1.99,
      quantity: 5
    }
  };
  // $scope.newItem = {}
  $scope.addItem = function () {
    if ($scope.lists[$scope.newItem.name]) {
      $scope.lists[$scope.newItem.name].price = $scope.newItem.price;
    } else {
      $scope.lists[$scope.newItem.name] = {
        price: $scope.newItem.price,
        quantity: 0
      };
    }
  };

  $scope.totalPrice = function () {
    var total = 0;
    for (var key in $scope.lists) {
      var valueObj = $scope.lists[key];
      total += valueObj.price * valueObj.quantity;
    }
    return total;
  };
}]);

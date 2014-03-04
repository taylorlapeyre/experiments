@angularapp.controller 'ProductsNewController', ($scope, $location, $http) ->
  $scope.addProduct = ->
    $http.post('/api/products', {product: $scope.product}).success (data) ->
      $location.url '/products'

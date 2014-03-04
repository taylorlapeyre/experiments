@angularapp.controller 'ProductsEditController', ($scope, $location, $http, $routeParams) ->
  $scope.product = {}
  $http.get("/api/products/#{$routeParams.id}").success (data) ->
    $scope.product = data
  
  $scope.updateProduct = ->
    product = {product: $scope.product}
    $http.put("/api/products/#{$routeParams.id}", product).success (data) ->
      $location.url '/products'

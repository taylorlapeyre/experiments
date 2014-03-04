@angularapp.controller 'ProductsShowController', ($scope, $http, $location, $routeParams) ->
  $scope.product = {}

  $http.get("/api/products/#{$routeParams.id}").success (data) ->
    $scope.product = data

  $scope.destroyProduct = ->
    $http.delete("/api/products/#{$routeParams.id}").success (data) ->
      $location.url '/products'

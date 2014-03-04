@angularapp.controller 'ProductsShowController', ($scope, $http, $routeParams) ->
  $scope.product = {}

  $http.get("/api/products/#{$routeParams.id}").success (data) ->
    $scope.product = data

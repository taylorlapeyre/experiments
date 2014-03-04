@angularapp.controller 'ProductsIndexController', ($scope, $location, $http) ->
  $scope.products = []
  $scope.viewProduct = (id) ->
    $location.url "/products/#{id}"

  $http.get('/api/products').success (data) ->
    $scope.products = data

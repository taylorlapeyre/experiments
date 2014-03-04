# In any file extends another module, we must be sure to include
# that module's base file so that we know what we're talking about.
#= require ./products

# Here we define the products controllers that we specified in our routes.
@products.controller
  IndexController: ($scope, $location, $http) ->
    $scope.products = []
    $http.get('/api/products').success (data) ->
      $scope.products = data

    $scope.viewProduct = (id) ->
      $location.url "/products/#{id}"

  ShowController: ($scope, $http, $location, $routeParams) ->
    $http.get("/api/products/#{$routeParams.id}").success (data) ->
      $scope.product = data

    $scope.destroyProduct = ->
      $http.delete("/api/products/#{$routeParams.id}").success (data) ->
        $location.url '/products'

  NewController: ($scope, $location, $http) ->
    $scope.createProduct = ->
      $http.post('/api/products', {product: $scope.product})
        .success (data) ->
          $scope.messages = ["Successfully Created!"]
        .error (data) ->
          $scope.messages = data

  EditController: ($scope, $location, $http, $routeParams) ->
    $http.get("/api/products/#{$routeParams.id}").success (data) ->
      $scope.product = data

    $scope.updateProduct = ->
      product = {product: $scope.product}
      $http.put("/api/products/#{$routeParams.id}", product)
        .success (data) ->
          $scope.messages = ["Update successful!"]
        .error (data) ->
          $scope.messages = data

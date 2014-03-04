@angularapp = angular.module 'angularapp', ['ngRoute']

# routes
@angularapp.config ($routeProvider) ->
  $routeProvider
    .when '/products',
      templateUrl: '/templates/products/index.html'
      controller: 'ProductsIndexController'
    .when '/products/:id',
      templateUrl: '/templates/products/show.html'
      controller: 'ProductsShowController'
    .otherwise
      templateUrl: '/templates/products/index.html'
      controller: 'ProductsIndexController'

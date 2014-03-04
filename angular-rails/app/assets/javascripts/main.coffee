@angularapp = angular.module 'angularapp', ['ngRoute']

# routes
@angularapp.config ($routeProvider) ->
  $routeProvider
    .when '/products',
      templateUrl: '/templates/products/index.html'
      controller: 'ProductsIndexController'
    .when '/products/new',
      templateUrl: '/templates/products/new.html'
      controller: 'ProductsNewController'
    .when '/products/:id/edit',
      templateUrl: '/templates/products/edit.html'
      controller: 'ProductsEditController'
    .when '/products/:id',
      templateUrl: '/templates/products/show.html'
      controller: 'ProductsShowController'
    .otherwise
      templateUrl: '/templates/products/index.html'
      controller: 'ProductsIndexController'

# Here we initialize the 'products' module of our application.
@products = angular.module('products', [])

# Defining all of the routes that pretain to this module. In this case we're
# just doing some basic CRUD pages.
@products.config ($routeProvider) ->
  $routeProvider
    .when '/products',
      templateUrl: '/templates/products/index.html'
      controller: 'Index'
    .when '/products/new',
      templateUrl: '/templates/products/new.html'
      controller: 'New'
    .when '/products/:id/edit',
      templateUrl: '/templates/products/edit.html'
      controller: 'Edit'
    .when '/products/:id',
      templateUrl: '/templates/products/show.html'
      controller: 'Show'

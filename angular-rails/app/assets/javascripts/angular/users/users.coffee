# Here we initialize the 'products' module of our application.
@users = angular.module('users', [])

# Defining all of the routes that pretain to this module. In this case we're
# just doing some basic CRUD pages.
@users.config ($routeProvider) ->
  $routeProvider
    .when '/signup',
      templateUrl: '/templates/users/new.html'
      controller: 'UsersNew'
    .when '/users/:id',
      templateUrl: '/templates/users/show.html'
      controller: 'UsersShow'
    .when '/users/:id/edit',
      templateUrl: '/templates/users/edit.html'
      controller: 'UsersEdit'

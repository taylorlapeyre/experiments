# In the base file of the application we have to make sure to include each
# of the module folders in the application.
#= require_tree ./products
#= require_tree ./users

# Here we kick off the angular application by creating our base module
# and importing the other modules that we're using. "ngRoute" is a module
# provided by angular to enable routing.
@angularapp = angular.module 'angularapp', [
  'ngRoute',
  'products',
  'users'
]

# In leu of any basic 'pages' module for showing a home page, we'll just
# redirect to /products when we hit root. Normally only error pages, etc.
# would be routed here.
@angularapp.config ($routeProvider) ->
  $routeProvider
    .when '/',
      redirectTo: "/products"

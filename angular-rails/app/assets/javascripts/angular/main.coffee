# In the base file of the application we have to make sure to include each
# of the module folders in the application.
#= require_tree ./products

# Here we kick off the angular application by creating our base module
# and importing the other modules that we're using. "ngRoute" is a module
# provided by angular to enable routing.
@angularapp = angular.module 'angularapp', ['ngRoute', 'products']

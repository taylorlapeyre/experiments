# In any file extends another module, we must be sure to include
# that module's base file so that we know what we're talking about.
#= require ./users

# Here we define the users controllers that we specified in our routes.
@users.controller
  UsersShow: ($scope, $http, $location, $routeParams) ->
    $http.get("/api/users/#{$routeParams.id}").success (data) ->
      $scope.user = data

  UsersNew: ($scope, $location, $http) ->
    $scope.createUser = ->
      $http.post('/api/users', {user: $scope.user})
        .success (data) ->
          $scope.messages = ["Account Successfully Created!"]
        .error (data) ->
          $scope.messages = data

  UsersEdit: ($scope, $location, $http, $routeParams) ->
    $http.get("/api/users/#{$routeParams.id}").success (data) ->
      $scope.user = data

    $scope.updateUser = ->
      user = {user: $scope.user}
      $http.put("/api/users/#{$routeParams.id}", user)
        .success (data) ->
          $scope.messages = ["Account updated successfully!"]
        .error (data) ->
          $scope.messages = data

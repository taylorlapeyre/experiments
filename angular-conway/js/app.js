var gameOfLife = angular.module('GameOfLife', ['WorldProvider']);

gameOfLife.controller('GameController', function($scope, $timeout, World) {
  $scope.world = World.world;

  $scope.reset = function() {
    World.reset();
  }

  var worldRules = function(cell) {
    var neighbors = cell.neighbors();

    if (neighbors < 2) {
      return function() { cell.kill() };
    }

    if (neighbors > 3) {
      return function() { cell.kill() };
    }

    if (neighbors == 3 && !cell.isAlive) {
      return function() { cell.create() };
    }
  }

  $scope.computeState = function() {
    var rules = World.visit(worldRules);
    for (var i = 0; i < rules.length; i++) {
      rules[i].apply(this);
    }
  }

  $scope.started = false;

  var step = function() {
    if ($scope.started) {
      $scope.computeState();
    }
    $timeout(step, 300);
  };
  step();

  $scope.start = function() {
    $scope.started = true;
  }

  $scope.stop = function() {
    $scope.started = false;
  }

});

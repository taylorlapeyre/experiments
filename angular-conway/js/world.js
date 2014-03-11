var worldProvider = angular.module("WorldProvider", []);

worldProvider.factory('World', function() {

    function checkWorldBoundries(world, x, y) {
      return world[x] != null && world[y] != null;
    }

    function buildCell(world, x, y) {
      return {
        world: world,
        isAlive: Math.random()<.5,
        pos: {
          x: x,
          y: y
        },
        toggle: function() { this.isAlive = !this.isAlive; },
        kill:   function() { this.isAlive = false; },
        create: function() { this.isAlive = true; },
        neighbors: function() {
          var neighbors = 0;
          for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
              if (i != 0 && j != 0) {
                var x = this.pos.x + i;
                var y = this.pos.y + j;
                if (checkWorldBoundries(this.world, x, y) && this.world[x][y].isAlive) {
                  neighbors++;
                }
              }
            }
          }
          return neighbors;
        }
      }
    }

    function buildWorld(numRows, numColumns) {
      var world = [];
      for (var i = 0; i < numRows; i++) {
        world[i] = [];
        for (var j = 0; j < numColumns; j++) {
          world[i].push(buildCell(world, i, j));
        }
      }
      return world;
    }

    return {
      world: buildWorld(12, 12),
      numRows: function() { return this.world.length; },
      numColumns: function() {
        return (this.world.length > 0) ? this.world.length : 0;
      },
      visit: function(visitor) {
        var result = [];
        for (var i = 0; i < this.numRows(); i++) {
          for (var j = 0; j < this.numColumns(); j++) {
            var rule = visitor.call(this, this.world[i][j]);
            if (rule != null) {
              result.push(rule);
            }
          }
        }
        return result;
      },
      reset: function() {
        this.visit(function(cell) { cell.kill() });
      }
    }

  });

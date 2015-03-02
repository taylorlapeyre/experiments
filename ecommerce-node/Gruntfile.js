module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      prod: {
        tasks: ['browserify', 'myth', 'watch:js', 'watch:css', 'nodemon:dev']
      },
      dev: {
        tasks: ['browserify', 'myth', 'watch:js', 'watch:css', 'nodemon:dev']
      }
    },

    browserify: {
      'front/compiled.js': ['front/app.js'],
      options: {
        transform: ['browserify-handlebars']
      }
    },

    myth: {
      options: {
        sourcemap: false
      },
      dist: {
        files: {
          'front/assets/stylesheets/compiled.css': 'front/assets/stylesheets/style.css'
        }
      }
    },

    nodemon: {
      dev: {
        script: 'back/index.js'
      }
    },

    watch: {
      js: {
        files: [
          'front/**/*.js',
          'front/**/*.hbs',
          '!**/node_modules/**',
          '!front/compiled.js'
        ],
        tasks: ['browserify']
      },
      css: {
        files: [
          'front/**/*.css', '!front/assets/stylesheets/compiled.css',
        ],
        tasks: ['myth']
      }
    }

  });

  grunt.loadNpmTasks('grunt-myth');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concurrent:dev']);
}

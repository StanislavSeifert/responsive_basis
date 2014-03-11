module.exports = function(grunt) {

  grunt: grunt.initConfig({

    // Compass Framework Interpreter
    compass: {
      dev: {
        options: {
          outputStyle: 'expanded', // expanded, compressed, compact, nested
          sassDir: 'css',
          specify: 'css/main.scss',
          cssDir: '../build/css/prod/'
        }
      },
      prod: {
        options: {
          outputStyle: 'compressed', // expanded, compressed, compact, nested
          sassDir: 'css',
          specify: 'css/main.scss',
          cssDir: '../build/css/prod/'
        }
      }
    },

    // Javascript Dateien Zusammenführen in eine Datei
    concat: {
      dist: {
        src: [
          'js/libs/*.js', // All JS in the libs folder
          'js/specific.js'  // This specific file
        ],
        dest: '../build/js/prod/application.min.js' //application.js'
      }
    },

    // Zusammengeführte Javascript-Datei minimizen
    uglify: {
      build: {
        src: '../build/js/prod/application.min.js', //application.js'
        dest: '../build/js/prod/application.min.js'
      }
    },

    // Listener auf veränderte SASS uns JS Dateien
    watch: {
        // ############ DEV ##############################################################
        // Wenn sich bei SCSS etwas verändert
        sass: {
          files: ['css/sass/*.scss', 'css/sass/**/*.scss', 'css/sass/vendor/**/*.scss'],
         tasks: ['compass:dev'],
          options: {
            livereload: true // Automatisches neuladen im Browsers
          },
        },
        // Wenn sich bei JS etwas verändert
        scripts: {
          files: ['js/*.js'],
          tasks: ['concat'], // Zusammenführen
          options: {
              spawn: false,
              livereload: true // Automatisches neuladen im Browsers
          }
        },
        // Wenn sich das HTML ändert
        html: {
          files: ['../build/*.html'],
          options: {
            livereload: true // Automatisches neuladen im Browsers
          }
        }

    }

  });

  // Plugin´s
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-sass');     // CSS Task
  grunt.loadNpmTasks('grunt-contrib-compass');  // CSS Task
  grunt.loadNpmTasks('grunt-contrib-concat');   // JS Task
  grunt.loadNpmTasks('grunt-contrib-uglify');   // JS Task
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks
  grunt.registerTask('dev', ['watch', 'compass:dev', 'concat']); // grunt dev : Development-Mode - inkl. Listener
  grunt.registerTask('default', ['watch', 'compass:dev', 'concat']); // default : grunt = grunt dev
  grunt.registerTask('prod', ['compass:prod', 'concat', 'uglify']); // grunt watch : Production-Mode - Zum erzeugen der Finalem CSS und JS Dateien
  //grunt.registerTask('default', ['watch', 'compass:dev', 'concat']); // Default = Dev

};
module.exports = function(grunt) {

  grunt: grunt.initConfig({

    // Compass Framework Interpreter
    compass: {
      dist: {
        options: {
          outputStyle: 'expanded', // expanded, compressed, compact, nested
          sassDir: 'css',
          specify: 'css/main.scss',
          cssDir: '../build/css'
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
        dest: '../build/js/application.js'
      }
    },

    // Zusammengeführte Jvascript-Datei minimizen
    uglify: {
      build: {
        src: '../build/js/application.js',
        dest: '../build/js/application.min.js'
      }
    },

    // Listener auf veränderte SASS uns JS Dateien
    watch: {
      // Wenn sich bei SCSS etwas verändert
      sass: {
        files: ['css/sass/**/*.scss', '!css/sass/vendor/**/*.scss'],
        tasks: ['compass:dist'],
        options: {
          livereload: true // Automatisches neuladen im Browsers
        },
      },
      // Wenn sich bei JS etwas verändert
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'], //Zusammenführen & Minimizen
        options: {
            spawn: false,
        }
      },
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
  grunt.registerTask('default', ['watch']);

};
module.exports = function(grunt) {

  grunt: grunt.initConfig({

    compass: {
      dist: {   
        options: {
          outputStyle: 'expanded', // expanded, compressed, compact, nested
          sassDir: 'compass',
          specify: 'compass/main.scss',
          cssDir: '../build/css'
        }
      }
    },

    watch: {
      sass: {
        files: ['compass/sass/**/*.scss', '!compass/sass/vendor/**/*.scss'],
        tasks: ['compass:dist'],
        options: {
          livereload: true // Automatisches neuladen im Browsers
        },
      }
    }

  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
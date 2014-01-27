module.exports = function(grunt) {

  grunt: grunt.initConfig({

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

    watch: {
      sass: {
        files: ['css/sass/**/*.scss', '!css/sass/vendor/**/*.scss'],
        tasks: ['compass:dist'],
        options: {
          livereload: true // Automatisches neuladen im Browsers
        },
      }
    }

  });

  // Plugin´s
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks
  grunt.registerTask('default', ['watch']);

};
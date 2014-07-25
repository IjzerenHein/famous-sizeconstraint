/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      target: ['*.js'],
      options: {
        config: '.eslintrc'
      }
    },
    jscs: {
        src: ['*.js'],
        options: {
            config: '.jscsrc'
        }
    },
    jsdoc2md: {
      separateOutputFilePerInput: {
        options: {
          index: true
        },
        files: [
            { src: 'SizeConstraint.js', dest: 'docs/SizeConstraint.md' }
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

  // Default task.
  grunt.registerTask('default', ['eslint', 'jscs', 'jsdoc2md']);
};

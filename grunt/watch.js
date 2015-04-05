module.exports = {
  gruntfile: {
    files: '<%= jshint.gruntfile.src %>',
    tasks: ['jshint:gruntfile']
  },
  serviceES6: {
    files: ['<%= cwd %>/lib/**/*.es6'],
    tasks: ['babel:es6']
  },
  serviceTS: {
    files: ['<%= cwd %>/lib/**/*.ts'],
    tasks: ['ts']
  },
  lib_test: {
    files: '<%= jshint.lib_test.src %>',
    tasks: ['jshint:lib_test']
  }
};
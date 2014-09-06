module.exports = {
  files: '<%= cwd %>/lib/**/*.js',
  options: {
    lazy: true,
    basePath: '<%= cwd %>/test/coverage/instrument/'
  }
};
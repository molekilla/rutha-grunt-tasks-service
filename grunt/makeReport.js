module.exports = {
  src: '<%= cwd %>/test/coverage/reports/**/*.json',
  options: {
    type: 'html',
    dir: '<%= cwd %>/test/coverage/reports',
    print: 'detail'
  }
};
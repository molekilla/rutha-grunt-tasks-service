module.exports = {
  dev: {
    script: '<%= cwd %>/lib/hapi/index.js',
    options: {
      nodeArgs: '<%= nodemon.args || [] %>',
      env: {
        PORT: '<%= nodeInspector.debugPort %>',
        DEBUG: '*'
      }
    }
  }
};
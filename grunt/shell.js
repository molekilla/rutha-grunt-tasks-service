module.exports = function (grunt, options) {
  

  var scripts = {
    jasmine: {
      command: "node ./node_modules/jasmine/bin/jasmine.js"
    },
    postinstall: {
      command: "npm install jasmine -g"
    }
  };
  
  if (process.env.NODE_ENV === 'production') {
    // do nothing
    scripts['postinstall'] = {
      command: 'pwd'
    };
  }
  
  return scripts;
};
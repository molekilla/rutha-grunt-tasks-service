module.exports = function (grunt, options) {
  

  var scripts = {
    jasmine: {
      command: "jasmine"
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
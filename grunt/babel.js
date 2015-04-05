       
module.exports = {
  es6: {
    files: [
        {
          expand: true,
          cwd: "<%= cwd %>",
          src: ["lib/**/*.es6"],
          dest: "<%= cwd %>",
          ext: ".js"
        }
    ],
    options: '<%= es6.options %>'
  }
};

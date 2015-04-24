       
module.exports = {
  ts: {
    files: [
        {
          expand: true,
          cwd: "<%= cwd %>",
          src: ["lib/**/*.ts", "models/**/*.ts", "spec/**/*.ts", "migrations/**/*.ts"],
          dest: "<%= cwd %>",
          ext: ".js"
        }
    ],
    options: '<%= es6.options %>'
  }
};

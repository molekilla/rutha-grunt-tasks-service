var Help =  {
  auditpkg: 'Verifies modules that contains security issues',
  serve: 'Serves API service',
  spec: 'Runs Jasmine specs',
  coverage: 'Runs Istanbul code coverage. Outputs HTML reports to test/coverage/reports',
  docs: 'Generates documentation',
  postinstall: 'Postinstall grunt shell script'
};


var tasks = function(grunt) {

    grunt.registerTask('postinstall', Help.postinstall, 'shell:postinstall');
  
    // Default task.
    grunt.registerTask('serve', Help.serve, ['babel:es6', 'jshint', 'concurrent']);
    grunt.registerTask('spec', Help.spec, ['jshint', 'shell:jasmine']);
    grunt.registerTask('coverage', Help.coverage, ['jshint', 'clean:coverage', 'env:coverage',
        'instrument', 'jasmine_node:coverage', 'storeCoverage', 'makeReport']);
    
    // verifies security
    grunt.registerTask('auditpkg', Help.auditpkg,
      ['validate-package']);

    // generates jsdoc3
    grunt.registerTask('docs', Help.docs,
      ['jsdoc']);
};

function Loader(grunt) {
    return {
        help: Help,
        registerTasks: function() {
            return tasks(grunt);
        }
    };
}


module.exports = Loader;
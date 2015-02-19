 module.exports = {
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['<%= cwd %>/lib/**/*.js',
        '<%= cwd %>/spec/**/*.js', '<%= cwd %>/index.js']
      },
      options: {
        reporter: require('jshint-stylish'),
        devel: true,
        curly: false,
        strict: false,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        node: true,
        undef: true,
        esnext: true,
        unused: false,
        boss: true,
        eqnull: true,
        expr: true,
        browser: true,
        multistr: true,
        laxcomma: true,
        globals: {
          require: false,
          module:false,
          __dirname: false,
          exports: false,
          describe: false,
          it: false,
          beforeEach: false,
          afterEach: false,
          Buffer: false,
          process: false
        }
      }
    };

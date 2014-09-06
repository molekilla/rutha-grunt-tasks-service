module.exports = {
  dev: {
    options: {
      specFolders: ['<%= cwd %>/spec/'],
      forceExit: true,
      match: '.',
      matchall: false,
      extensions: 'js',
      specNameMatcher: 'spec'
    }
  },
  coverage: {
    options: {
      specFolders: ['<%= cwd %>/test/coverage/'],
      forceExit: true,
      match: '.',
      matchall: false,
      extensions: 'js',
      specNameMatcher: '*'
    }
  }
};
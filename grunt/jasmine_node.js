module.exports = {
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
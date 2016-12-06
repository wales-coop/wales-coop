export default [{
  path: '/{param*}',
  method: 'GET',
  handler: {
    directory: {
      path: './public',
      listing: false,
    },
  },
}];

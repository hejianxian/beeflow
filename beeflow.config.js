module.exports = {
  '@beeflow': {
    api_server: 'http://172.16.1.97:8080',
    path: '/main'
  },
  input: '/src/main.js',
  output: '/dist',
  port: 8080,
  externals: [],
  proxy: ['/api'],
  proxyTarget: 'http://172.16.1.97:8081'
};
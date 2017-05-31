module.exports = {
  beeflow: {
    api_server: 'http://172.16.1.97:8080',
    router_root: '/main'
  },
  input: '/src/main.js',
  output: '/dist',
  port: 8080,
  autoOpenBrowser: true, // default true
  externals: [],
  proxyTable: {
    '/api': 'http://172.16.1.97:8989'
  }
};
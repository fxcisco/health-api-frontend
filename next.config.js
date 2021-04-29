const path = require('path');

module.exports = (phase) => {
  return {
    future: {
      webpack5: true,
    },
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
      return config;
    },
    env: {
      APPID: process.env.APPID || 'health',
      API_URL: 'http://localhost:5100',
      CLIENT_URL: 'https://fxcisco.com',
    },
    webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');
      return config;
    },
  }
}
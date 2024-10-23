const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "url": require.resolve("url/"),
    "crypto": require.resolve("crypto-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "stream": require.resolve("stream-browserify"),
    "buffer": require.resolve("buffer/"),
    "util": require.resolve("util/"),
    "path": require.resolve("path-browserify"),
    "assert": require.resolve("assert/"),
    "querystring": require.resolve("querystring-es3"),
    "fs": false,  
    "net": false, 
    "tls": false, 
    "process": require.resolve("process/browser"),
    "vm": require.resolve("vm-browserify"), 
    "async_hooks": false 
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  );
  return config;
};

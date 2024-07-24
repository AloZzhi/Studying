const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000', // API服务器地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // 去掉前缀/api
      },
    })
  );
};

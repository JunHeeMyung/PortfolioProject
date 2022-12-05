const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        createProxyMiddleware(
            ['/api','/test'],
        {
            target: process.env.PROXY,
            changeOrigin: true
        })
    );
};
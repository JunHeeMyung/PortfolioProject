const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        createProxyMiddleware(
            ['/api',],
        {
            target: process.env.PROXY,
            changeOrigin: true
        })
    );
};
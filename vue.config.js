module.exports = {
    devServer: {
        // 本地
        proxy: {
            '/api':{
                target: 'http://localhost:80',
                changeOrigin: true,
                pathRewrite:{'^/api':''}
            }
        }
        // 服务器
        // proxy: 'http://deal.kooriookami.top'
    },
    // publicPath: './'
}
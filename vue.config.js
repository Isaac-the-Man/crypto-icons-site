const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin()
        ]
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .test(/\.(png)$/i)
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                options.limit = -1
                return options
            })
            .end()
    }
}
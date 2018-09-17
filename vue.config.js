module.exports = {
    //对webpack进行配置
    configureWebpack: {
        module: {
            rules: [{
                test: /\.ico$/,
                use: 'file-loader',
            }]
        },
    }
};
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = parseInt(process.env.PORT || 3000, 10);

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    // quiet: true,
    proxy: {
        '*': { target: 'http://localhost:' + port }
    }
}).listen(port + 1, function () {
    console.log('Webpack Dev Server listening on port ' + (port + 1));
});

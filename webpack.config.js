const path = require('path')
const webpack = require('webpack')

const resolve = {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
}

const plugins = [
    new webpack.LoaderOptionsPlugin({
        debug: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
]

const buildModule = {
    rules: [
        {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: [
                    'transform-decorators-legacy',
                ]
            }
        }
    ]
}

const entry = {
    preview: [
        './src/preview.jsx'
    ]
}

const output = {
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
    filename: '[name].js'
}

const devtool = "eval-source-map"

module.exports = {
    entry,
    plugins,
    output,
    devtool,
    resolve,
    module: buildModule
}
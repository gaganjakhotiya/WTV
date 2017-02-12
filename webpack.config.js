var path = require('path')

const IS_PRODUCTION = true

module.exports = {
    entry: {
        index: './src/index.ts'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: '/node_modules/'
                
            }, {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: '/node_modules/',
                options: {
                    "transpileOnly": true,
                }
            }, {
                test: /\.(jpeg?|jpg|png|gif|svg)$/i,
                loader: 'file-loader',
                exclude: 'node_modules',
                options: {
                    emitFile: false
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue']
    },
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ])
    module.exports.devtool = '#source-map'
}
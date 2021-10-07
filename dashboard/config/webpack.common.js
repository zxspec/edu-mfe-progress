const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name][contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss|\.css$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "useBuiltIns": "usage",
                                corejs: { version: "3.17" }
                            }],
                        ],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: [".jsx", ".js", ".json", ".vue"],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html' }),
    ]
};
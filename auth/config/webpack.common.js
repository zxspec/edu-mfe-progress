const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [
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
                            '@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
};
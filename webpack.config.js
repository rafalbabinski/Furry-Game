module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "./js/out.js"
    },
    devtool: 'source-map',
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader?url=false']
        }, {
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader?url=false',
                'sass-loader'
            ]
        }]
    }
}

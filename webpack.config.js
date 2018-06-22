var config = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    module: {
            rules: [
                {test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/},
                {test: /\.html$/, use: "raw-loader"},
                {test: /\.scss$/, use: [
                    {
                        loader: "style-loader"
                    },
                     {
                         loader: "css-loader"

                    },
                    {
                        loader:  "sass-loader"
                    }]}
            ]
        }
};

if (process.env.NODE_ENV === 'production'){
    console.log('hello world')
    config.output.path = __dirname + '/dist'
}

module.exports = config;
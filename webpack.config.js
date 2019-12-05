
let cssLoader = [
    {
        loader: 'style-loader'
    },
    {
        loader: "css-loader", options: {importLoaders: 1}
    }
];

let config = {
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
                {
                    test: /\.scss$/,
                    use: [...cssLoader, 'sass-loader']
                },
                {
                    test: /\.(png|jpg|jpeg)$/,
                    use:
                    [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }
            ]
        }
};

// if (process.env.NODE_ENV === 'production'){
//     console.log('hello world')
//     config.output.path = __dirname + '/dist'
// }

module.exports = function(env, argv){
    if(argv.mode === 'production'){
        config.output.path = __dirname + '/public/dist'
    }

    return config;
};
module.exports = {
    entry: "./scripts/entry.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.s?css$/,
              loaders: ["style", "css", "sass"]
            },
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: "babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0",
              presets: ['react', 'es2015', 'stage-0']
            }
        ]
    },
    resolve: {
      // tell webpack which extensions to auto search when it resolves modules. With this,
      // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
      extensions: ['', '.js', '.jsx'],
      modulesDirectories: [ 'node_modules' ],
    }
};

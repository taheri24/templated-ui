module.exports = {
    optimization: {
        namedChunks:true,
        runtimeChunk: "single",
        splitChunks:   {
            
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }

        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    entry: {
        core: './src/core/exports.ts',
        templates: './src/templates/imports.ts',
        vendors:['react']

    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.tsx?$/],
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
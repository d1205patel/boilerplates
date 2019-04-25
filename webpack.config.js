const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports =  (env) => {
    const isProduction= env === 'production';

    return {
        mode: isProduction ? 'production':'development',
        entry: './src/app.js',
        output : {
            path: path.resolve(__dirname , 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /.\js/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.s?css/,
                    use: isProduction
                         ? [MiniCssExtractPlugin.loader,'css-loader','sass-loader'] 
                         : ['style-loader','css-loader','sass-loader']
                }
            ]
        },
        optimization: {
            minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css',
              })
        ],
        devtool : isProduction ? 'source-map':'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
        }
    }
}
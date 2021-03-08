const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const Dotenv=require('dotenv-webpack');



module.exports={
    mode:"development",
    entry: ['@babel/polyfill','./src/index.js'],
    output:{
        path:path.join(__dirname,'build'),
        filename:'bundle.js'
    },
    devtool: "cheap-eval-source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            
            {
                test: /\.css$/,
                use:[
                  'style-loader',
                  {
                  loader: 'css-loader',
                  options : {importLoaders: 1} 
                  },
                  'postcss-loader'
                    ]
            },

            {
                test: /\.(gif|png|jpeg|jpg|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      name: '[path][name].[ext]',
                      outputPath: 'images/'
                     
                    }
                  },
                ],
              }

          
        ]
    },

    devServer:{
        port: 3000,
        contentBase:path.join(__dirname, 'build')
    },


    plugins:[
        new HtmlWebpackPlugin({
          template:'./src/index.html',
          minify:{
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
          }
        }),
        new MiniCssExtractPlugin({
            filename:'styles.css'
        }),
        new Dotenv()
      
    ]


}

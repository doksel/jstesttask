const webpack = require('webpack');
const path = require('path');
 
module.exports = {
    // entry: "./app/app.jsx", // входная точка - исходный файл
    // output:{
    //     path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
    //     publicPath: '/public/',
    //     filename: "bundle.js"       // название создаваемого файла
    // },
    devServer: {
        historyApiFallback: true,
      },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[ {  //загрузчик для jsx
            test: /\.jsx?$/, // определяем тип файлов
            exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
            use: {
                loader: "babel-loader",      // определяем загрузчик
                options:{
                    presets:["env", "react"]    // используемые плагины
                }
            },  
            
        },
        {
            test: /\.js?$/,
            loader: "babel-loader",
            exclude: [/node_modules/]
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }
            ]
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
          }]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
    ]
}
// "scripts": {
//     "dev": "webpack --mode development",
//     "build": "webpack --mode production"
//   }
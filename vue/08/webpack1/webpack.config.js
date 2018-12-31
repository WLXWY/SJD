const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve('dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.(jp|jpe|pn)g$/,
                use:'file-loader'
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)/,
                use:'url-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ //把文件缓存到html中，减少硬盘的负担
            template:path.resolve('index.html'),
            filename:'index.html'
        })
    ],
    mode:'development',
    resolve:{
        extensions:['.vue','.js','.jsx','.css'],//自动解析扩展名
        alias:{
            'vue':'vue/dist/vue.esm.js',//懒人配置，少写路径
            '@':path.resolve('src')//代表根目录，导入时使用绝对路径，减轻相对路径的繁琐
        }
    },
    devServer:{//开发服务器
       contentBase:path.resolve('dist'),//html文件在哪里加载，绝对路径
       port:8082,//更改端口号
       compress:true,//压缩
       open:true
    }
}
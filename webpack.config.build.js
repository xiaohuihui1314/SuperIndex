/**
 * Created by Administrator on 2016/10/26.
 */
const webpack = require('webpack'),
    path = require("path"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    AssetsPlugin = require('assets-webpack-plugin'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: {  //页面入口文件配置
        index: './public/react/index.js',
        public: [
            "react",
            'react-dom'
        ]
    },
    output: { //入口文件输出配置
        path: path.join(__dirname, './public/assets/version-[hash:8]/'),
        // filename: 'js/[name].[hash:8].js',
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8][id].js'
    },
    // devtool: 'source-map',//调试
    module: {
        loaders: [ //加载器配置
            {
                test: /\.(jsx|js)?$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: [
                        // "transform-decorators-legacy"
                        "transform-object-assign",
                        ['import', [{libraryName: "antd", style: 'css'}]],
                        //['import', [{libraryName: "antd", style: true}]],  // import less
                    ],
                },
                cacheDirectory: true,
                exclude: '/node_modules/'
            },
            {test: /\.scss$/, loader: 'style!css!sass', exclude: '/node_modules/'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader"), exclude: '/node_modules/'},
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                loader: 'file-loader?name=[hash].[ext]',
                exclude: '/node_modules/'
            },
            {test: /\.(png|jpg)$/, loader: 'url?limit=819200&name=[hash].[ext]', exclude: '/node_modules'},
            {test: /\.less$/, loaders: "style!css!less", exclude: '/node_modules/'},
        ]
    },
    resolve: {
        //后缀名
        extensions: ['', '.js', '.json', '.css', '.scss', '.sass', ".less"],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',    //生成的html存放路径，相对于 path
            template: './views/index.html',
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        }),
        //压缩css文件
        new ExtractTextPlugin('public/[name].[contenthash:8].css',{
            allChunks:true,//把所有css打包一起
        }),
        //自动注入库定义
        new webpack.ProvidePlugin({
            'antd': true,
            'React': 'react',
            'ReactDOM': 'react-dom'
        }),
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: "public",
            filename: "public/commonFun..js",
            minChunks: 3//提取依赖关系
        }),
        // //压缩打包文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 它的作用是生成具有独立hash值的css和js文件，即css和js文件hash值解耦。
        // webpack-md5-hash插件对chunk-hash钩子进行捕获并重新计算chunkhash，它的计算方法是只计算模块本身的当前内容（包括同步模块）
        // new WebpackMd5Hash(),
        new AssetsPlugin({
            filename: './public/assets/assets-map.json',
            update: true,
            prettyPrint: true
        }),
        //允许错误不打断程序
        // new webpack.NoErrorsPlugin()
    ]
};
module.exports = config;
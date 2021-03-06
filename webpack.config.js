/**
 * Created by Administrator on 2016/10/26.
 */
const webpack = require('webpack'),
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
        path: './public/assets/version-[hash:8]/'   ,
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8][id].js'
    },
    watch: true,//监听改变的文件
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
            // {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css'), exclude: '/node_modules/'},
            {test: /\.css$/, loader: 'style!css', exclude: '/node_modules/'},
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                loader: 'file-loader?name=[hash].[ext]',
                exclude: '/node_modules/'
            },
            {test: /\.(png|jpg)$/, loader: 'url?limit=8192&name=[hash].[ext]', exclude: '/node_modules'},
            {test: /\.less$/, loaders: "style!css!less", exclude: '/node_modules/'},
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.css', '.scss', '.sass', ".less"],
    },
    devServer: {
        contentBase: './views/', //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
        hot: true,//自动刷新
        inline: true,
        open: true,
        port: 3300
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',    //生成的html存放路径，相对于 path
            template:'./views/index.html',
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        }),
        //热加载
        new webpack.HotModuleReplacementPlugin(),
        //自动注入库定义
        new webpack.ProvidePlugin({
            'antd':true,
            'React': 'react',
            'ReactDOM': 'react-dom'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "public",
            filename: "public/commonFun..js"
        })
    ]
};
module.exports = config;
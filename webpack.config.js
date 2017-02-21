/**
 * Created by Administrator on 2016/10/26.
 */
const webpack = require('webpack');
module.exports = {
    entry: {  //页面入口文件配置
        index: './public/react/pages/App.js'
    },
    output: { //入口文件输出配置
        path: './js/',
        filename: '[name].js'
    },
    watch: true,//监听改变的文件
    devtool: 'source-map',//调试
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
                        // ['import', [{libraryName: "antd", style: true}]],  // import less
                    ],
                },
                cacheDirectory: true,
                exclude:'/node_modules/'
            },
            {test: /\.scss$/, loader: 'style!css!sass', exclude:'/node_modules/'},
            {test: /\.css$/, loaders: ['style', 'css'], exclude:'/node_modules/'},
            {test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/, loader: 'file-loader?name=[hash].[ext]', exclude:'/node_modules/'},
            {test: /\.(png|jpg)$/, loader: 'url?limit=819200&name=[hash].[ext]', exclude:'/node_modules'},
            {test: /\.less$/, loaders: "style!css!less",exclude:'/node_modules/'},
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.css','.scss',  '.sass', ".less"],
    },
    devServer:{
        contentBase: './views/', //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
        hot: true,//自动刷新
        inline: true,
        open:true,
        port: 3300
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.HotModuleReplacementPlugin()//热加载
    ]
};

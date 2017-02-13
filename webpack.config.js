/**
 * Created by Administrator on 2016/10/26.
 */



module.exports = {
    /*    //插件项
     plugins: [commonsPlugin],*/
    //页面入口文件配置
    entry: {
        index: './public/react/pages/App.js'
    },
    //入口文件输出配置
    output: {
        path: './js/',
        filename: '[name].js'
    },
    watch:true,
    /*
     devtool:'source-map',
     */
    module: {
        //加载器配置
        loaders: [
            /*
             //使用ES6
             //# npm install babel-loader --save-dev
             //# npm install babel-core --save
             //# npm install babel-preset-es2015 --save-dev
             //使用ES7
             //# npm install --save-dev babel-preset-stage-0
             //# npm install --save-dev babel-preset-stage-1
             //# npm install --save-dev babel-preset-stage-2
             //# npm install --save-dev babel-preset-stage-3
             */

            {
                test: /\.(jsx|js)?$/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                // exclude:'/node_modules/',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: [
                        // "transform-decorators-legacy"
                         "transform-object-assign",
                          ['import', [{libraryName: "antd", style: 'css'}]],
                        // ['import', [{libraryName: "antd", style: true}]],  // import less
                    ],
                },
                cacheDirectory: true
            },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            //npm install node-sass --save-dev
            //安装淘宝镜像
            // npm install -g cnpm --registry=https://registry.npm.taobao.org
            //cnpm install node-sass
            {
                test: /\.scss$/,
                loader: 'style!css!sass',
                // exclude:'/node_modules/'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                // exclude:'/node_modules/'
            },
               {
             test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
             loader: 'file-loader?name=[hash].[ext]'
             },
            //npm install url-loader --save-dev
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=819200&name=[hash].[ext]',
                // exclude:'/node_modules/'
            },
            {
                test: /\.less$/,
                loaders: "style!css!less",
                // loader: extractLESS.extract(['css','css!less']),
                // exclude:'/node_modules/'
            }

            /*  {react1: /\.css$/, loader: 'style-loader!css-loader'},
             {react1: /\.js$/, loader: 'jsx-loader?harmony'},
             {react1: /\.scss$/, loader: 'style!css!sass?sourceMap'},
             {react1: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}*/
        ]
    },


    // //其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.json', '.css', '.scss', ".less"],
    }
    // resolve: {
    //     root: 'E:/github/flux-example/src', //绝对路径
    //     extensions: ['', '.js', '.json', '.scss'],
    //     alias: {
    //         AppStore : 'js/stores/AppStores.js',
    //         ActionType : 'js/actions/ActionType.js',
    //         AppAction : 'js/actions/AppAction.js'
    //     }
    // }
};

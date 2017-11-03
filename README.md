
概念辨析：
webpack的配置中：
output.path:  打包文件的输出路径
output.publicPath:  文件被引入的相对地址，即打包后的html文件中是以哪种方式引入图片或者css的。

[hash:8] :  指的是工程的哈希值。
[chunkhash] :  指的是文件内容的哈希值。

#getting-started章节

基础的webpack使用说明。

代码在getting-started目录中。

查看效果方式：

```
cd  getting-started
npm install
npm run build
```

然后在浏览器中打开dist/index.html页面。

#asset-managerment章节

参考链接：https://webpack.js.org/guides/asset-management/

介绍如何在webpack中引入css文件，使用style-loader,css-loader。介绍了loader的概念。

如何引入图片，file-loader。

如何引入字体,file-loader。

还有csv-loader引入csv数据 xml-loader，引入xml数据。

对应代码在asset-management文件夹中。查看效果方式类型上一章节。

#output-management章节

参考链接：https://webpack.js.org/guides/output-management/

本节主要介绍了webpack配置中的entry，output的基础配置，以及引入了plugins的介绍，如html-webpack-plugin（在默认输出页面生成index.html页面），clean-webpack-plugin（清空文件夹插件）。

啰嗦一点：html-webpack-plugin上有很多配置点，可以参考http://www.cnblogs.com/wonyun/p/6030090.html

#development章节
参考链接https://webpack.js.org/guides/development/

介绍几个开发常用配置和工具：

devtool: 'inline-source-map' : 能够在浏览器参考源码

webpack --watch  : 监控模式启动webpack。

webpack-dev-server :  不但监控变动，而且还自动刷新浏览器。

webpack-dev-middleware： 如何在express启动webpack。这里教程没有涉及到热部署。

webpack配置output.publicPath: '/'输出文件使用路径。

这部分功能都是通过npm run 启动脚本执行的。

#hot-module-replacement章节

模块热部署章节，参考https://webpack.js.org/guides/hot-module-replacement/，上面一章主要介绍页面刷新热部署。

webpack.HotModuleReplacementPlugin : webpack自带的模块热部署插件
webpack.NamedModulesPlugin  ： 监控模块变更插件。

模块热部署模块看后台日志会生效，但是前端不一定会生效，需要在module.hot中特殊处理。react模块热部署要引入react-hot-loader模块配置。

#tree shaking

https://webpack.js.org/guides/tree-shaking/

即 import {a} from './index.js'其中的{}的特性。

需要结合uglifyjs-webpack-plugin模块去除多余代码。

对应代码参考下一章节。

#production

参考：https://webpack.js.org/guides/production/。

包括多环境配置--使用webpack-merge

devtool:"source-map" : 生产打包，打包后带有可调式代码。
//压缩包支持souceMap
new UglifyJSPlugin({
    sourceMap: true
})

配置node的process.env环境变量：

#code-splitting

https://webpack.js.org/guides/code-splitting/，分片介绍。

通过entry配置分片。

通过以下插件完成共有组件的打包。
new webpack.optimize.CommonsChunkPlugin({
       name: 'common' // Specify the common bundle's name.
     })


#额外

##webpack中的相对路径

webpack.config.js
{
    context:process.cwd(), //当前执行node命令时候的文件夹地址 ——工作目录
    entry: "./index.js"  //相对于context配置的路径

    plugins: [
     new CleanWebpackPlugin(['dist'],
        {root: __dirname,   //被清空的文件夹的相对路径，默认是相对于脚本
        }
     ),
     new HtmlWebpackPlugin({
       title: 'test-css',
       template:"./template.html", //相对于content
       filename:"./file.html"    //相对于output.path

     })
    ]

    output: {
       path:process.cwd() , //默认是工作目录
       filename: '[name].js', //相对于output.path
          
       publicPath:"/"        //静态资源引用的路径的前缀
    }
,}
   
##webpack中的css加载相关

css-loader 是处理css文件中的url()等

style-loader 将css插入到页面的style标签

less-loader 是将less文件编译成css

sass-loader 是将sass文件编译成css

postcss-loader 是css兼容性处理

loader的加载顺序是从右往左，从下往上

extract-text-webpack-plugin : 该插件将css抽取为一个文件。
optimize-css-assets-webpack-plugin : 该插件将抽取的css文件进行压缩

ps： sass-loader需要提前安装node-sass，但是国内安装这个太麻烦了。
可以考虑使用淘宝镜像安装:
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install --save-dev node-sass
```

##url-loader
加载图片，如果图片很小，直接嵌入html代码中。

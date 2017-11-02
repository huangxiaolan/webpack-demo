 
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






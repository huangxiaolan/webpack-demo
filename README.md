"# webpack-demo" 
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

##output-management章节

参考链接：https://webpack.js.org/guides/output-management/

本节主要介绍了webpack配置中的entry，output的基础配置，以及引入了plugins的介绍，如html-webpack-plugin（在默认输出页面生成index.html页面），clean-webpack-plugin（清空文件夹插件）。

啰嗦一点：html-webpack-plugin上有很多配置点，可以参考http://www.cnblogs.com/wonyun/p/6030090.html

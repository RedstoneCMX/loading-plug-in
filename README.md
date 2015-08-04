# loading-plug-in
这是一个jquery页面加载效果插件。
##参数设定
* background，显示loading时，背景颜色，默认#FFFFF3
* opacity，显示loading时，背景的透明程度，默认0.8
* showhide，show或者hide取其一，需要显示loading时，选择show，需要隐藏loading时选择hide，默认show

##如何使用
* 首先需要在页面中引入jquery的js文件和插件的js文件，jquery文件一定要在插件文件之前，文件路径根据自己的文件目录更改：
```html
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="js/loading.js"></script>
```
* 同时需要引入插件的css文件：
```html
<link rel="stylesheet" type="text/css" href="css/loading.css"/>
```
* 要想显示loading效果，还必须在页面中添加一个div，例如：
```html
<div class="loading"></div>
```
之后在对应的js代码处添加：
```javascript
//这个是显示loading时使用
$(".loading").loading({
  "background":"#FFFFF3",
  "opacity":"0.8",
  "showhide":"show"
});
//隐藏loading时使用
$(".loading").loading({
  "showhide":"hide"
});
```

##Demo展示
![demo效果](https://github.com/RedstoneCMX/loading-plug-in/blob/master/showimages/show1.png)
![demo效果](https://github.com/RedstoneCMX/loading-plug-in/blob/master/showimages/show2.png)
![demo效果](https://github.com/RedstoneCMX/loading-plug-in/blob/master/showimages/show3.png)
![demo效果](https://github.com/RedstoneCMX/loading-plug-in/blob/master/showimages/show4.png)
##注
请下载本插件，直接打开demo.html即可看到展示效果。功能较单一，并且本人能力水平有限，如有任何问题和意见，请联系我，期待和你的交流~
![我的名片](https://github.com/RedstoneCMX/loading-plug-in/blob/master/myphoto/myphoto.jpg)

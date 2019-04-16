### Usage

```js
const imagex = require("imagex");

imagex({
    src       : "/pictures/src",  // 图片文件夹地址
    dest      : "/pictures/dest", // 输出文件夹地址
    prefix    : "prefix-",        // 重命名前缀
    isMini    : true,             // 压缩
    isCrop    : true,             // 空白裁剪
    isUnique  : true,             // 去重
    isSprites : true,             // 合图
    algorithm : "left-right",     // 合图布局模式 默认 binary-tree，可选 top-down | left-right..
    spritesCount: 2               // 生成多合图，指定几张图片合成一张合图，可选
}, function(data){
    console.log(data);            // 图片信息数据
}
```
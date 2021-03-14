# pp-pre-load
## 资源预加载

支持一切静态资源文件，图片、视频、音频等

```JavaScript
npm install pp-pre-load

import preLoadRes from 'pp-pre-load'

preLoadRes('https://photo.tuchong.com/1890400/f/390796834.jpg')
.then(data=>{
    console.log(data);
});
```
## 1.2.1 update
支持传入数组请求资源，会在全部资源请求结束后执行then方法

```JavaScript

let srcList = [
        'https://photo.tuchong.com/1890400/f/390796834.jpg',
        'https://photo.tuchong.com/1890400/f/585831730.jpg',
        'https://photo.tuchong.com/1890400/f/542381524.jpg',
        'https://photo.tuchong.com/1890400/f/145626362.jpg',
        'https://photo.tuchong.com/1890400/f/456594721.jpg',
    ];
    preLoadRes(srcList)
        .then(data => {
            // console.log(data);
        });
```


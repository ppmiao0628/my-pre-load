# pp-pre-load
## 资源预加载

支持图片格式：(png|jpe?g|gif|svg|webp)

```JavaScript
npm install pp-pre-load

import preLoadRes from 'pp-pre-load'

preLoadRes('https://photo.tuchong.com/16133504/l/221041344.webp')
.then(data=>{
    console.log(data);
})
```
## 1.2.1 update
支持传入数组请求资源，会在全部资源请求结束后执行then方法
```JavaScript

let srcList = [
        'https://photo.tuchong.com/16133504/l/221041344.webp',
        'https://photo.tuchong.com/16133504/l/554422871.webp',
        'https://photo.tuchong.com/16133504/l/589746361.webp',
        'https://photo.tuchong.com/16133504/l/630510222.webp',
        'https://photo.tuchong.com/16133504/l/301191363.webp',
        'https://photo.tuchong.com/16133504/l/144101804.webp',
        'https://photo.tuchong.com/16133504/l/198365495.webp',
        'https://photo.tuchong.com/16133504/l/617402534.webp',
        'https://photo.tuchong.com/16133504/l/3198036091.webp'
    ];
    preLoadRes(srcList)
        .then(data => {
            // console.log(data);
        });
```


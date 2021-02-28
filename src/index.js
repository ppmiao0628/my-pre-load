import { reject } from "core-js/fn/promise";

function preLoadRes(url) {
    return new Promise((resolve) => {
        let len = 1;
        let urlArr = [];
        let count = 0;
        if (Array.isArray(url)) {
            urlArr = url;
            len = urlArr.length;
        } else {
            urlArr.push(url);
        }
        urlArr.map(item => {
            xhrUrl(item).then(data => {
                console.log(count, data);
                count++;
                if (count >= len) {
                    console.log(data);
                    resolve(data);
                }
            });
        })
    })
}
function xhrUrl(url) {
    return new Promise(resolve => {
        // 如果是图片，可以用image处理
        const imgReg = /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/;
        // const fileReg = /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/;
        // if (imgReg.test(url)) {
        //     const img = new Image();
        //     img.src = url;
        //     img.onload = () => {
        //         resolve('done');
        //     }
        //     return;
        // }
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            // console.log(xhr.readyState);
            /**
             * 0 初始化状态。XMLHttpRequest 对象已创建或已被 abort() 方法重置。
             * 1 open() 方法已调用，但是 send() 方法未调用。请求还没有被发送
             * 2 Send() 方法已调用，HTTP 请求已发送到 Web 服务器。未接收到响应。
             * 3 所有响应头部都已经接收到。响应体开始接收但未完成。
             * 4 HTTP 响应已经完全接收。
             */
            if (xhr.readyState == 4) {
                resolve('done');
            }
        };
        xhr.onprogress = (e) => {
            if (e.lengthComputable) {
                // console.log("Received" + e.loaded + "of" + e.total + "bytes")
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    });
}
export default preLoadRes;
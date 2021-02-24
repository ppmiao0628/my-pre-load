
function preLoadRes(url) {
    return new Promise((resolve) => {
        // 如果是图片，可以用image处理
        const imgReg = /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/;
        // const fileReg = /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/;
        if (imgReg.test(url)) {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                console.log('img loaded!');
                resolve('done');
            }
            return;
        }
        const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    const responseText = xhr.responseText;
                    resolve(responseText);
                } else {
                    console.log("Request was unsuccessful:" + xhr.status);
                }
            };
            xhr.onprogress = (e) => {
                if (e.lengthComputable) {
                    console.log("Received" + e.loaded + "of" + e.total + "bytes")
                }
            };
            xhr.open("GET", url, true);
            xhr.send();
        // if(fileReg.test(url)){
        //     const xhr = new XMLHttpRequest();
        //     xhr.onreadystatechange = () => {
        //         if (xhr.readyState == 4 && xhr.status == 200) {
        //             const responseText = xhr.responseText;
        //             resolve(responseText);
        //         } else {
        //             console.log("Request was unsuccessful:" + xhr.status);
        //         }
        //     };
        //     xhr.onprogress = (e) => {
        //         if (e.lengthComputable) {
        //             console.log("Received" + e.loaded + "of" + e.total + "bytes")
        //         }
        //     };
        //     xhr.open("GET", url, true);
        //     xhr.send();
        // }
    })
}
export default preLoadRes;
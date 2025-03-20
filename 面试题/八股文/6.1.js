// 浅拷贝
function shallowClone(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
// 深拷贝一
function deepClone(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof Object) {
                // 递归
                newObj[key] = deepClone(obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
}
// 深拷贝二:官方提供的方法
const res = structuredClone(obj);
// 深拷贝三:MessageChannel 消息传递机制
function deepClone(obj) {
    return new Promise((resolve) => {
        const { port1, port2 } = new MessageChannel(); // 正确地解构出两个端口
        port1.onmessage = (ev) => resolve(ev.data); // 当消息到达时解析Promise
        port2.postMessage(obj); // 使用port2发送原始对象
    });
}
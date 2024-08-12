
//代理行为
import { track } from './effect'



const get = createGetter()
const set = createSetter()

function createGetter() {
  return function get(target, key, receiver) {
    console.log('正在读取值');
    let res = Reflect.get(target, key, receiver)//target[key]
    //添加副作用函数（依赖收集）
    TrackEvent(target, 'get', key)
    return res
  }
}

function createSetter() {
  return function set(target, key, receiver) {
    let res = Reflect.set(target, key, value, receiver)
    //触发key属性身上的副作用
                   


    return res
  }
}






export const mutableHandlers = {
  get,
  set
}
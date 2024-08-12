
import { mutableHandlers } from "./baseHandlers";

const reactiveMap = new Map()//记录被代理的对象

export function reactive(target) {
  return createReactiveObject(target, reactiveMap, mutableHandlers)
}


function createReactiveObject(target, proxyMap, proxyHandlers) {
  if (typeof target !== 'object') {
    return target
  }

  //判断是否已经被代理过，被代理过了，存在proxyMap里
  if (proxyMap.get(target)) {
    return proxyMap.get(target)
  }

  //执行代理
  const proxy = new Proxy(target, proxyHandlers)


  //记录
  proxyMap.set(target, proxy)

  return proxyMap
}
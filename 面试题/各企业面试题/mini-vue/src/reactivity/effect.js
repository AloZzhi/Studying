import { TrackOpTypes } from "vue"

const targetMap = new WeakMap()     //存放原对象：[effect1,effect2,()=>{},...]
let activeEffect = null

export function effect(fn, option = {}) {
  const effectFn = () => {
    try {
      activeEffect = effectFn
      return fn()
    } catch (error) {
      activeEffect = null
    }
  }
  effectFn()
  return effectFn
}



export function track(target, type, key) {

  let depsMap = targetMap.get(target)
  if (!depsMap) {//初次读取该值
    targetMap.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {//当前还未做依赖收集
    deps = new Set()
  }
  if (!deps.has(activeEffect) && activeEffect) {
    deps.add(activeEffect)//添加副作用
  }
  depsMap.set(key, deps)
}
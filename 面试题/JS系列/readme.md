# js中数据常用的方法？
## 1. 增：:
- push
- unshift(头部增)
- splice   
    - arr.splice(开始进行操作的下标位置,要删除的元素数量,要添加到数组中的元素)
- concat
    - Array.prototype.concat(要合并的数组或值)
    - letArray = arr1.concat(arr2); 返回新数组

## 2. 删:
- pop
- shift 
- slice

## 3. 查:
- indexOf  会返回下标  lastIndexOf(从右往左)
- includes 返回true/false
- find

## 4.迭代:
- forEach
- map
- reduce     适用累加
    arr.reduce((pre,cur,i,arr)=>{
      return pre+item//返回给pre
    },0)
- every      是否每一项都满足条件    返回true/false
- some       有没有项满足条件        返回true/false
- filter      提取数组中满足特定条件的元素
- join

## 5.转换:
- join
- reverse          toReversed().reverse   拷贝      toReversed()返回一个新数组
- sort 排序




# js中字符串常用的方法有哪些？
## 1.增
  concat

## 2.删
  substring  截取字符串
  slice      跟substring一样

## 3.改
  replace   返回新字符串
  trim trimLeft trimRight      去空格  返回新字符串
  toUpperCase  toLowerCase      
  padStart  padEnd             补位    大整数相加


## 4.查
  chatAt      没有值的话不返回值     常用的[]查询会返回undefined
  startsWith  以什么开头        返回true/false
  match       正则
  search      正则

## 5.转
  转数组 split('用啥进行分割')




# 谈谈js中的类型转换机制
- 介绍：js中有（7种）原始类型，和引用类型之分，在开发过程中有时候我们需要人为地将变量的类型转换机制转为其他类型，这种转换称之为   显示转换    ，有时候js引擎也会发生隐式转换

- 方式：
1.显示：Number(),parseInt(),xxx
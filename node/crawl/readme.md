# 从编辑到AIGC

- 编程
    - 有一个要解决的问题？
    - 扎实的408基础，计算机网络
    - 分步细化任务，编写代码（伪代码）
    - 选择语言，编译器（二进制），cpu（运行）
    - 模块化编写，封装，复用，有利于代码的可读性和调试


- 让位给AIGC
    - 基于LLM大模型
    - 哪些传统编程可以被LLM取代  prompt 编程
    给LLM下指示
    



## 爬虫 Crawl
    - 他有我拿
        先发生一个HTTP请求，用url发生一个GET请求  https://movie.douban.com/chart
        响应的是HTML(字符串)
    - 解析HTML字符串，如果可以像css选择器一样，拿到电影列表
    - 最后将所有的电影对象组成数组，以json数组的方式返回，然后爬虫结束

## node爬虫
    - npm init -y 初始化为后端项目
        package.json项目描述文件
    - npm i (install) 安装第三方包 
    - require 导入包 安装后导入包
    - main.js 入口文件
        安排流程
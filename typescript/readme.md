# 冲冲冲

    - 秋招提前批
        - 大四补录 10k-4k 二线城市的大厂分部或内包
            - 面试经验 伪装成大三同学先去面试

    - 项目
        - 有一个全栈项目

# 需要什么东西

    - 八股文90%
    - 项目
        - 有一个全栈项目
        - 一个高质量项目

    - 算法 字节等公司才考中等难度的算法

## 项目要点

    - 给项目加上ts npm init -y vite   typescript
    把里面的js文件改为ts
        - router RouterRecordRaw
        - es6 模块知识点最后一击
            import type {ROuterRecordRaw} from
            'vue-router'
        - pinia
            数据管理
    - typescript 是静态的，js是动态的
        编译能力，写代码的时候就可以检测出问题
    - RouterRecordRaw 由vue-router提供
    - 自定义类型
        - 所有响应式数据都需要约束
            ref reactive
        - types目录 ， ts项目多的一个架构，目录
        - export type XXX {
            key:string;
            以分号隔开的类型声明空间
        }
        - 函数 的返回值
        <T>
        ref<RecentlyViewItem>()

- tailwindcss
  npm install -D tailwindcss postcss autoprefixer 只下载
  npx tailwindcss init 可执行

  npx 是区别于 npm 的一个包管理工具
  npx 可以运行 node_modules 目录下（.bin/）的包的命令，如果没有安装，会自动安装
  用完后自动删除（试一把）
  在测试员工机器上跑一下

- vant

  - UI 组件库
  - vite 工作流 自动引入
    - vite 是工程化工具 webpack（竞争者）
    - alias 短链接配置 resolve
    - plugins 插件系统
      直接全局使用 vant
      - @vant/auto-import-resolver
      - Compenents
    - 方便，但性能不好
  - 按需加载，没有用到的组件不要引入，代码洁癖

- tailwindcss 原子化 css

  - 真的很快
  - 后台界面开发

- 组件化

  - 组件的封装，页面由组件构成，组件思维模式 -一级路由，越简洁越好读
  - 插槽 slot -性能优化，生命周期

- 性能优化

  - 路由组件懒加载
  - vant 按需加载
  - 防抖节流
  - 图片懒加载
  - 减少图片或优化图片
    gradient 的渐变 直接带来图片效果，但是不用图片

- hooks 函数式编程

  - useRouter useRoute
  - useHomeStore
    相同点： use 函数 非常好用
  - useStorage
    localStorage + ref(响应式) + watchEffect(监听观察者)

- slot
  插槽 <component> slot </component> - 提高组织的定制性，交由外界决定

- vue 组件内存泄露问题
  - v-for 一定要加 key
    - 顺序调整
    - 插入操作
    - vdom
  - 定时器 事件监听 一定要移除
    v-if v-show 组件下线
    组件下线，定时器或监听还在内存中，无法回收，导致内存泄漏
    onUnmount 生命周期
- vant 组件

  - UI 组件库，加速开发（选型，移动端）
  - 理解了插槽，读源码
  - 借鉴 vant，写出了组件（高复用）

- Login 页面介绍那些

  - vant 快速搭建
  - 按需加载
  - from 校验，值的收集很方便
  - slot 组件复用 插槽
  - 使用 useRouter hook 函数跳转到注册

- watch 和 watchEffect
  监听
  深入了解 vue 的过程
  开始使用 watch 在响应式数据发生改变后，做点什么，要指定参数 watchEffect 不用指定，直接给函数，按函数的依赖

- 生命周期
    - 事件监听要unmount removeEventListener 内存泄漏
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
    npm install -D tailwindcss postcss autoprefixer    只下载
    npx tailwindcss init                        可执行

    npx是区别于npm的一个包管理工具
    npx可以运行node_modules目录下（.bin/）的包的命令，如果没有安装，会自动安装
    用完后自动删除（试一把）
    在测试员工机器上跑一下

- vant
    - UI组件库
    - vite 工作流 自动引入
        - vite 是工程化工具 webpack（竞争者）
        - alias 短链接配置 resolve
        - plugins 插件系统
            直接全局使用vant
            - @vant/auto-import-resolver
            - Compenents 
        - 方便，但性能不好
    - 按需加载，没有用到的组件不要引入，代码洁癖

- tailwindcss 原子化css
     - 真的很快
     - 后台界面开发


- 组件化
    - 组件的封装，页面由组件构成，组件思维模式
        -一级路由，越简洁越好读
    - 插槽slot
    -性能优化，生命周期

- 性能优化
    - 路由组件懒加载
    - vant 按需加载
    - 防抖节流 
    - 图片懒加载 
    - 减少图片或优化图片
        gradient 的渐变 直接带来图片效果，但是不用图片

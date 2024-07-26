# Vue Element Plus 后台管理系统

- vue-router

  - RouterRecordRaw 类型
    meta 可选类型 title needsLogin role
  - NProgress
    beforeEach start
    afterEach done

- 按需加载 Element Plus
- elementPlus 图标字体库
  - elementPlus 组件库
  - 企业库，有自己的设计师，图标要用自己的，所以没必要 Element Plus 的，更小

-es6 模块化语法点

- import 的本意是将依赖模块中的响应功能引入到当前模块，并在当前模块取个代表名字
- export + export default

- - 按时全部输出 管他哪种
- import XXX,{x,y,z} 前者为默认值 ，后者按需
- import XX from ''最简单
- import type 类型定义引入 用 ts 开发的时候

- es6 代码可读性
- for of
- Object.entries()对象变成二维数组，且每项都是 key，value 在一次性批量导入图标库中很方便

- ts 功能点

  - type 和 interface 都要到位

- 组件与通信

  - collapse -数据状态驱动的界面 MVVM
    - 跨组件，选择 pinia 或父组件分配

- 组件的概念

  - html，css，js 集合完成某项功能，好复用，页面由组件构成
  - 以 html 标签的方式插入 DOM 树
  - 不能和 html 标签一样，建议中间加个- Kebab-case 命名

- scoped 原理

  - 项目介绍必须表达的简单语法
  - css 不会污染全局 scoped
  - 会给每个类名元素一个随机 hash 的 data-v-hash 属性
  - css 经编译带上这个属性选择器

- scoped, .vue 文件 setup 选项式 API lang="ts" lang="scss"
  - import 引入一张图片 css 文件
  - 因为有 vite 这样的工程化方案
  - 编译

## 如何介绍自己的项目

- vue 能力，element plus 熟不熟 vue 相关考点，性能优化
- 难点，亮点

- 是什么项目
  - 旅游/学习/ 不要说高仿某网站 移除相关 logo 和文字 尊重著作权
- 实现了哪些功能

  1. 登录/注册/退出功能
  2. AI 应用列表 loadmore 功能
  3. gpt 聊天
  4. 文生图
  5. 定制了 tab 栏，滑动单元格，轮播图

- 技术栈
  - vue-router
    - historyRouter/路由懒加载/结合 meta 路由守卫（用户角色权限设置）
    - 一级路由 二级路由 router-link router-view(全局组件)SPA
    - vue-router 源码(包围圈)
  - pinia
    - 数据通信 传统的 麻烦 超越父兄子孙，全局共享
    - 通信原理(包围圈)
  - vant/ element-plus
    - 从 UI 组件库学到了很多东西
    - 组件的概念/类别
      - 母姊女孙 关系
    - 页面级别组件
    - 父组件持有数据状态（ref），子组件只负责渲染（props,无状态）
    - 通用组件 超越页面复用的 components
    - UI 组件库 70%的组件需求是一样的 不用造轮子
    - 举个例子
      - form 表单 校验和数据收集，只需要配置一下即可 约定大于一切
      - dropDown>dropDownMenu>dropDownItem slot 的用法，定制性很强
        - Dialog 组件 如何复用的
  - typeScript
    - 类型定义，js 的超级
    - types 架构
    - 泛型 ref reactive promise
    - 函数参数
    - 99%以上的错误减少 适合大型项目，vue3 的重要特性
  - hooks
    - 函数式编程
    - 响应式业务的封装复用 loadmore 举例

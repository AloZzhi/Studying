# 全栈能力

- express 框架
- typescript
- mvc model view controller
- mysql 表
- 复杂业务

- ts 和 node 结合

  - tsc-watch 箭筒文件改动 编译 ts dist/main.js
  - @types/node node 的类型声明文件 node 本身并不包含声明文件
  - typescript 转译的核心文件
  - tsconfig.json 配置文件
    common .js target
    前端载体是用户，后段主体是服务器

- 功能模块

  - 配置模块
  - app 模块 应用和中间件
  - 路由模式
    - 后端的功能模块
  - 有多少张表 mysql 关系型数据库
    - post 主表
      - comment 评论表
      - file 文件表 文章附件
      - post_tag tag 表
      - tag 标签表
      - user_like_post 用户点赞表
    - user 主表
      - avatar 副表
  - router -> controller

    - resful Method + url 定位资源
      /posts/:postId
    - 交给控制器 controller
      - 取参数
      - 校验参数
      - 业务逻辑

  - controller ->service(数据库操作 sql 执行)
  - try catch 包住 connection.promise().query()
    - next(error)
  - 错误处理中间件
      app.middleware 第一个参数是error对象
  - 索引
    - 主键
    - 外键
    - 普通索引
    - 联合索引

- 良好的编程风格
  - 模块化
  - 注释
  - git 提交规范
  - hooks 函数式编程
  - 面向对象 OOP 单例

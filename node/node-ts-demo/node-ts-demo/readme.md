# 全栈能力
    - express 框架
    - tyepscript 
    - mvc   model view controller
    - mysql 表
    - 复杂的业务  sql 

- ts 和 node 结合
    - tsc-watch  监听文件改动  编译 ts   dist/main.js
    - @types/node  node类型声明文件 node本身并不包含类型声明文件
    - typescript 转移的核心文件
    - typescript 转译的核心文件
    - tsconfig.json  配置文件
        common.js  target
        前端载体是用户，后端是服务器
- 功能模块
    -配置模块
       dotenv
    - app 模块 应用和中间件
    - 路由模块
       - 后端的功能模块
    - 有多少张表 mysql 关系型数据库
        - post 主表
            - comment 评论表
            - file 文件表 文件附件
            - post_tag  tag 表
            - tag  标签表
            - user_like_post  用户点赞表

        - user 主表
            - avatar 副表
    - router -> controller
        - restful Method + url 定位资源
            /posts/:postId
        - 交给控制器
            - 取参数
            - 校验参数
            - 业务逻辑
    - contriller -> service (sql执行)
    - try catch 包住 connection.promise().query()
         - next(error)
    - 错误处理中间件
        app.middleware  第一个参数是error 对象
    - 功能模块的业务划分
        - post.router.ts 路由模块 restful 
        - post.controller.ts 控制器 解析参数 校验参数 业务逻辑
        - post.service.ts SQL业务逻辑 mysql2 sql 复杂
        - post.model.ts 数据模型
        - post.provider.ts 查询的辅助内容
    - 表连接
        - inner join
        - left join
        - right join

        n             1
        post          user
        postId user
        - 多对多 关系表 user_like_post 

    - 中间件高级使用技巧
        - node 执行流程就是中间件组成的
        - 执行机制就是洋葱模型 使用next() 执行下一个
        - 函数 封装独立功能
        - next 下一个中间件
        注册 valdateUserData,hashPassword,userController.store
        三个中间件
        - next(new Error(message))
            错误中间件兜底,细化状态码和报错信息
    - 其实任何一个项目都是一个blog项目
        CRUD sql 太简单
        - user
        - post

    - 索引
        - 主键
        - 关键
        - 普通索引
        - 联合索引
        - 唯一索引
        查询, 快 业务场景中,查询需求是什么  
        user_like_post
        userId postId 联合查询，对应着某用户点赞了某文章
        count 有多少个点赞 postId 普通索引

- 良好的编程风格
    - 模块化
    - 注解
    - git
    - hooks 函数式编程
    - 面向对象 OOP 单例

- sql
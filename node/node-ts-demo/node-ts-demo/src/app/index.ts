// app的 中间件挂载

import express from 'express'  //koa一样的
import cors from 'cors'
import {ALLOW_ORIGIN} from './app.config'
import postRouter from '../post/post.router' //文章路由模块
import userRouter from '../user/user.router'
import {defaultErrorHandler} from './app.middleware'  //错误处理

// 创建项目
const app=express()

app.use(
    cors({
        origin:ALLOW_ORIGIN,  //白名单
        exposedHeaders:'X-Total-Count'   // 总计数量
    })
)
/*
    处理json
    post 请求体
    bodyParser 请求体解析器
*/
app.use(express.json())

//路由
app.use(
    postRouter,
    userRouter
)

// 错误处理中间件
app.use(defaultErrorHandler)


// 导出应用
export default app
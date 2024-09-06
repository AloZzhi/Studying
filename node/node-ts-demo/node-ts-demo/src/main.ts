// const a=1
// console.log('hello ts',a)


// 入扣文件 功能模块化
// app 实例，中间件，我们模块化
import app from './app'
// 配置文件 .env
import {APP_PORT} from './app/app.config'
import {connection} from './app/database/mysql' 

app.listen(APP_PORT,()=>{
    console.log('服务器已启动',APP_PORT)

})

// 数据库连接
connection.connect(error=>{
        if(error){
            console.log('数据库连接失败',error.message)
            return
        }
        console.log('数据库连接成功')
    }

)
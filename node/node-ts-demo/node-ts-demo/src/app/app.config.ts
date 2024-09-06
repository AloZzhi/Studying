// 配置相关
import dotenv from 'dotenv'

dotenv.config()  //把env文件中的配置解析到process.env中

// 应用配置
export const { APP_PORT } = process.env  //进程对象

//CORS配置
export const { ALLOW_ORIGIN } = process.env

// 数据库配置
export const{
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
}=process.env


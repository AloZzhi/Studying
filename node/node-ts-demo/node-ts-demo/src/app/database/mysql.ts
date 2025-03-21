import mysql from 'mysql2'; //数据库驱动
import {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
}from '../../app/app.config'

// 创建数据库连接 句柄
export const connection=mysql.createConnection({
    host:MYSQL_HOST,
    port:parseInt(MYSQL_PORT,10),
    database:MYSQL_DATABASE,
    user:MYSQL_USER,
    password:MYSQL_PASSWORD
})

import mysql from 'mysql2' //数据库驱动
import {
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USER
} from '../../app/app.config'

// console.log(process.env, MYSQL_USER, MYSQL_PASSWORD)
// 创建数据库连接 句柄

export const connection = mysql.createConnection({
  host: MYSQL_HOST,
  port: parseInt(MYSQL_PORT, 10),
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD
})


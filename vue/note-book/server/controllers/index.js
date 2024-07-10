//封装一个函数用来连接数据库
const mysql = require('mysql2/promise');
const config = require('../config/index.js');

//线程池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.URSERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT

})

const allServices = {
  async query(sql, values) {
    try {
      //通过线程池连接mysql
      const conn = await pool.getConnection()
      //对连接执行某些操作
      const [rows, fields] = await conn.query(sql)
      //释放连接
      pool.releaseConnection(conn);

      return Promise.resolve(rows)

    } catch (error) {
      return Promise.reject(error)
    }
  }
}

//登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username="${username}" and password="${password}";`
  return allServices.query(_sql)
}

module.exports = {
  userLogin
}
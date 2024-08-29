// 配置相关
import dotenv from 'dotenv'

dotenv.config()
console.log(process.env.MYSQL_DATABASE, process.env.APP_PORT, '//////////////')
/**
 * 应用配置
 */
export const { APP_PORT } = process.env

/**
 * 数据库配置
 */
export const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE
} = process.env


/**
 * CORS
 */
export const { ALLOW_ORIGIN } = process.env



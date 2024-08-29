//入口文件 功能模块化
//app实例  中间件  
import { log } from 'console';
import app from './app'
import { APP_PORT } from './app/app.config'
import { connection } from './app/database/mysql'
//配置文件 .env
app.listen(APP_PORT, () => {
  console.log('服务器已启动');
})

connection.connect(error => {
  if (error) {
    console.log('数据库连接失败', error);
    return;
  }
  console.log('数据库连接成功');

})
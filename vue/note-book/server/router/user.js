const router = require('koa-router')();
const { userLogin } = require('../controllers/index.js')

router.prefix('/user') //路由前缀

router.post('/login', async (ctx) => {
  //获取到前端传递的账号密码，去数据库中校验
  const { username, password } = ctx.request.body
  //去数据库中检验
  const result = await userLogin(username, password)//await阻塞后续代码执行
  console.log(result);
})

module.exports = router
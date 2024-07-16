const router = require('koa-router')();
const { findNoteListByType } = require('../controllers/index.js')
const jwt = require('../utils/jwt.js')

router.get('/findNoteListByType', jwt.verify(), async (ctx) => {
  //获取前端传递的 note_type, 去数据库中以改note_type字段读取数据，返回给前端
  const { note_type } = ctx.request.query
  console.log(ctx.userId, '-------');
  console.log(note_type);
  try {
    const res = await findNoteListByType(note_type, ctx.userId)
    console.log(res);
    if (res.length) {
      ctx.body = {
        code: '8000',
        data: res,
        msg: '查询成功'
      }
    } else {
      ctx.body = {
        code: '8000',
        data: 'success',
        msg: '当前分类下没有数据'
      }
    }
  } catch (error) {
    ctx.body = {
      code: '8005',
      data: error,//不用打引号，因为error是object
      msg: '服务器异常'
    }
  }
})
module.exports = router
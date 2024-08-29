import express from 'express'
import * as postController from './post.controller'

const router = express.Router()



// 详情页
router.get(
  '/posts/:postId',
  postController.show
)

export default router
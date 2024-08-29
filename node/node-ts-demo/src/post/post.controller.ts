import {
  getPostById
} from './post.service'
/**
* 详情页
*/
// koa ctx = request + response
export const show = async (request, response, next) => {
  const { postId } = request.params;
  console.log(postId);
  try {
    // 模块化后 
    const post = await getPostById(parseInt(postId, 10))
    response.send(post)
  } catch (error) {
    console.log(error, '///');
    next(error)
  }
}
import { connection } from "../app/database/mysql"
import { PostModel } from "./post.model"

export const getPostById = async (
  postId: number
) => {
  const statement = `
    SELECT
      post.id,
      post.title,
      post.content
    From post
    WHERE post.id =?
`
  //执行查询
  const [data] = await connection.promise().query(statement, postId)
  console.log(data, '???');
  if (!data[0]) {
    throw new Error('NOT_FOUND')
  }
  return data[0]
}
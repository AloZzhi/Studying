import {connection} from "../app/database/mysql";
import { PostModel } from "./post.model";
import {sqlFragment} from './post.provider'

export const getPostById=async(
    postId:number
)=>{
    //简单查询
    //关联用户表 用户JSON
    //评论总数 自子查询
    const userId = 4
    const statement=`
    select
        post.id,
        post.title,
        post.content,
        ${sqlFragment.user},
        ${sqlFragment.totalComments},
        ${sqlFragment.tags},
        ${sqlFragment.totalLikes},
        (
            select count(user_like_post.postId)
            from user_like_post
            where
                user_like_post.postId = post.id
                && user_like_post.userId = ${userId}
        ) as liked
    from post
    ${sqlFragment.leftjoinUser}
    ${sqlFragment.leftjoinTag}
    where post.id=?
    `
    // 执行查询
    const [data]=await connection.promise().query(statement,postId)
    
    if(!data[0]){
        throw new Error("查询失败")
    }
    return data[0]
}   
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = void 0;
const mysql_1 = require("../app/database/mysql");
const post_provider_1 = require("./post.provider");
exports.getPostById = async (postId) => {
    const userId = 4;
    const statement = `
    select
        post.id,
        post.title,
        post.content,
        ${post_provider_1.sqlFragment.user},
        ${post_provider_1.sqlFragment.totalComments},
        ${post_provider_1.sqlFragment.tags},
        ${post_provider_1.sqlFragment.totalLikes},
        (
            select count(user_like_post.postId)
            from user_like_post
            where
                user_like_post.postId = post.id
                && user_like_post.userId = ${userId}
        ) as liked
    from post
    ${post_provider_1.sqlFragment.leftjoinUser}
    ${post_provider_1.sqlFragment.leftjoinTag}
    where post.id=?
    `;
    const [data] = await mysql_1.connection.promise().query(statement, postId);
    if (!data[0]) {
        throw new Error("查询失败");
    }
    return data[0];
};
//# sourceMappingURL=post.service.js.map
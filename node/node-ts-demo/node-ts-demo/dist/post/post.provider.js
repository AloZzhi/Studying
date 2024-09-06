"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlFragment = void 0;
exports.sqlFragment = {
    user: `
        JSON_OBJECT(
            'id',user.id,
            'name',user.name,
            'avatar',IF(COUNT(avatar.id),1,null)
        ) as user
    `,
    tags: `
        CAST(
            IF(
                COUNT(tag.id),
                CONCAT(
                '[',
                    GROUP_CONCAT(
                    DISTINCT JSON_OBJECT(
                        'id', tag.id,
                        'name', tag.name
                    )
                    ),
                ']'
                ),
                NULL
            ) AS JSON
    ) AS tags
    `,
    totalComments: `
        (
            select 
                count(comment.id)
            from
                comment
            where
                comment.postId = post.id
        ) as totalComments
    `,
    totalLikes: `
        (
            select 
                count(user_like_post.postId)
            from
                user_like_post
            where
                user_like_post.postId = post.id
        ) as totalLikes
    `,
    leftjoinTag: `
        LEFT JOIN post_tag
            on post_tag.postId = post.id
        LEFT JOIN tag
            on post_tag.tagId = tag.id
    `,
    leftjoinUser: `
        LEFT JOIN user 
            ON user.id=post.userId
        LEFT JOIN avatar
            ON user.id = avatar.userId
    `
};
//# sourceMappingURL=post.provider.js.map
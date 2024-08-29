"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = void 0;
const mysql_1 = require("../app/database/mysql");
exports.getPostById = async (postId) => {
    const statement = `
    SELECT
      post.id,
      post.title,
      post.content
    From post
    WHERE post.id =?
`;
    const [data] = await mysql_1.connection.promise().query(statement, postId);
    console.log(data, '???');
    if (!data[0]) {
        throw new Error('NOT_FOUND');
    }
    return data[0];
};
//# sourceMappingURL=post.service.js.map
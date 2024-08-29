"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
const post_service_1 = require("./post.service");
exports.show = async (request, response, next) => {
    const { postId } = request.params;
    console.log(postId);
    try {
        const post = await post_service_1.getPostById(parseInt(postId, 10));
        response.send(post);
    }
    catch (error) {
        console.log(error, '///');
        next(error);
    }
};
//# sourceMappingURL=post.controller.js.map
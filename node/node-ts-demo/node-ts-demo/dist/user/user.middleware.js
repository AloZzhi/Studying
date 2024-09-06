"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = exports.hashPassword = exports.validateUserData = void 0;
exports.validateUserData = (request, response, next) => {
    console.log('验证用户数据');
    const { name, password } = request.body;
    console.log('validate', name, password);
    if (!name)
        return next(new Error('NAME_IS_REQUIRED'));
    if (!password)
        return next(new Error('PASSWORD_REQUIRED'));
    next();
};
exports.hashPassword = (request, response, next) => {
    response.send('haha');
};
exports.defaultErrorHandler = (error, request, response, next) => {
    let statusCode, message;
    switch (error.message) {
        case 'NAME_IS_REQUIRED':
            statusCode = 400;
            message = '请输入用户名';
            break;
        case 'PASSWORD_IS_REQUIRED':
            statusCode = 400;
            message = '请输入密码';
            break;
        default:
            statusCode = 500;
            message = '服务器暂时有问题,正在抢修...';
    }
    response.status(500).send({
        message
    });
};
//# sourceMappingURL=user.middleware.js.map
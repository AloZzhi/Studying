export const validateUserData = (request, response, next) => {
    console.log('验证用户数据')
    const {name,password} = request.body
    console.log('validate',name,password)
    if(!name)return next(new Error('NAME_IS_REQUIRED'))
    if(!password)return next(new Error('PASSWORD_REQUIRED'))
    next()
}

export const hashPassword = (request, response, next) => {
    response.send('haha')
}

export const defaultErrorHandler = (error,request,response,next)=>{
    let statusCode:number,message:string;

    switch(error.message){
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
            message = '服务器暂时有问题,正在抢修...'
    }
    response.status(500).send({
        message
    })
}
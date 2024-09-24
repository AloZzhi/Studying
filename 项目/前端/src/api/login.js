import instance from "@/http/index.js";  

// 注册  
export const register = async (data) => {  
    const { account, password } = data;  
    try {  
        const response = await instance({  
            url: '/api/register',  
            method: 'POST',  
            data: {  
                account,  
                password  
            }  
        });  
        return response.data; // 返回响应数据  
    } catch (error) {  
        console.error('Registration error:', error.response ? error.response.data : error.message);  
        throw error; // 重新抛出错误以便调用者处理  
    }  
};  

// 登录  
export const login = async (data) => {  
    const { account, password } = data;  
    try {  
        const response = await instance({  
            url: '/api/login',  
            method: 'POST', // 统一使用大写  
            data: {  
                account,  
                password  
            }  
        });  
        return response.data; // 返回响应数据  
    } catch (error) {  
        console.error('Login error:', error.response ? error.response.data : error.message);  
        throw error; // 重新抛出错误以便调用者处理  
    }  
};
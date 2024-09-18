export default class ResponseResult{
  code:string;
  msg:string|Resource
  data:string|Object|ArrayBuffer

  //属性前没加关键字就会被实例对象访问，要加上构造函数
  constructor() {
    this.code=''
    this.msg=''
    this.data=''
  }
}
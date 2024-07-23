// ts 内置的type 输出一个类型定义
// export type LoginInfo ={
// username:string,
// password:string,
// hometown?:string;//可选
// }

export interface LoginInfo{
  username:string;
  password:string;
  hometown?:string;
}
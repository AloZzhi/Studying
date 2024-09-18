import NewsTypeModel from '../../viewmodel/NewsTypeModel'

export class CommonConstant{

  //接口的 host
   static readonly SERVER:string = 'http://192.168.1.59：9588'

  /**
   * 实例对象不能访问，只有构造函数可以访问
   *private：只能在类里面使用
   *
   */

  //获取新闻类型
  static readonly GET_NEWS_TYPE:string = 'news/getNewsType'

  //超时认定时间
  static readonly HTTP_READ_TIMEOUT:number=10000

  //成功状态码
  static readonly HTTP_CODE_200:number =200

  //后端返回正确时的code
  static readonly SERVER_CODE_SUCCESS:string ='success'

  //默认的TabBar
  static readonly TabBars_DEFAULT_NEWS_TYPES: Array<NewsTypeModel> = [
    {id: 0, name: '全部'},
    {id: 1, name: '国内'},
    {id: 2, name: '国际'},
    {id: 3, name: '娱乐'},
    {id: 4, name: '军事'},
    {id: 5, name: '体育'},
    {id: 6, name: '科技'},
    {id: 7, name: '财经'}
  ]

}

export const enum ContentType{
  JSON = 'application/json'  //不设置值读为索引0

}
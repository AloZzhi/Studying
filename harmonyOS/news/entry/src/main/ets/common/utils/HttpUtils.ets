//封装一个用于发http请求的函数
import {http} from '@kit.NetworkKit'
import{CommonConstant as Const,ContentType} from '../constant/CommonConstant'
import ResponseResult from '../../viewmodel/ResponseResult'

export function httpRequestGet(url:string){
  let httpRequest = http.createHttp()
  let responseResult = httpRequest.request(url,{
    method:http.RequestMethod.GET,
    readTimeout:Const.HTTP_READ_TIMEOUT,
    header:{
      'Content-Type':ContentType.JSON
    },
    connectTimeout:Const.HTTP_READ_TIMEOUT,
    extraData:{}
  })

  let serverData:ResponseResult = new ResponseResult()

   return responseResult.then((value)=>{
    if(value.responseCode===Const.HTTP_CODE_200){
      let result ='${value.result}'//JSON字符串
      let resultJson:ResponseResult = JSON.parse(result)
      if(resultJson.code === Const.SERVER_CODE_SUCCESS){
        serverData.data = resultJson.data
      }
      serverData.code = resultJson.code
      serverData.msg = resultJson.msg

    }else{
      serverData.msg=`${$r('app.string.http_error_message')}&${value.responseCode}`
    }

  return serverData
  }).catch(()=>{
    serverData.msg =$r('app.string.http_error_message')
    return serverData
  })
}
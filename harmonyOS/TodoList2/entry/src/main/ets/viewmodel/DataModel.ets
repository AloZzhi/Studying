import CommonConstants from '../common/constant/CommonConstant'
  class DataModel{
  private tasks:Array<string> = CommonConstants.TODO_DATA

    getData(){
    return this.tasks
    }
}

export default  new DataModel()
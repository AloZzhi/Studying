import CommonConstants from '../common/constant/CommonConstant'
import DataModel from '../viewmodel/DataModel'
import ToDoItem from '../component/ToDoItem'
@Entry
@Component
struct Index {
 private totalTasks: Array<string> = DataModel.getData()
  aboutToAppear(): void {
  this.totalTasks=DataModel.getData()
 }

  build() {
    Column(){
      Text($r('app.string.page_title'))
        .fontSize($r('app.float.title_font_size'))
        .fontWeight(FontWeight.Bold)
        .lineHeight($r('app.float.title_font_height'))
        .width(CommonConstants.TITLE_WIDTH)
        .margin({
          top:$r('app.float.title_margin_top'),
          bottom:$r('app.float.title_margin_bottom')
        })
        .textAlign(TextAlign.Start)
      // 循环生成列表项
      ForEach(this.totalTasks,
        (item:string)=>{
          ToDoItem({content:item})
        },
        (item:string)=>{
          console.log(item)
          return JSON.stringify(item)
        }
      )
    }
    .width(CommonConstants.FULL_LENGTH)
    .height(CommonConstants.FULL_LENGTH)
    .backgroundColor($r('app.color.page_background'))
  }
}
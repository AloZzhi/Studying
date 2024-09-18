import NewsTypeModel from '../viewmodel/NewsTypeModel'
import NewsViewModel from '../viewmodel/NewsViewModel'

@Component
export default struct TabBar {
  @State tabBarArray: NewsTypeModel[] = NewsViewModel.getDefaultTypeList()

  aboutToAppear(): void {
    NewsViewModel.getNewsTypeList().then((typeList: NewsTypeModel[]) => {
      this.tabBarArray = typeList
    }).catch((typeList: NewsTypeModel[]) => {
      this.tabBarArray = typeList
    })
  }

  @Builder TabBuilder(index:number){
    Column(){
      Text(this.tabBarArray[index].name)
        .width(80)
        .height(40)
        .padding(20)
        .fontSize(20)
    }
  }


  build() {
    Tabs() {
     ForEach(this.tabBarArray,(tabsItem:NewsTypeModel)=>{
        TabContent(){
          Column(){
            //新闻组件
            Text(`${tabsItem.id}`)
              .fontSize(90)
          }

        }
        .tabBar(this.TabBuilder(tabsItem.id))

     })
    }
  }
}
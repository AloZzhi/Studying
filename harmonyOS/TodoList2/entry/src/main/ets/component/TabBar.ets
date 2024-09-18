import NewsList from './NewList'

@Component
export default struct TabBar{
  @State tabBarArray:string[]=['国际','国内','军事','科技']
  build(){
    Tabs(){
        ForEach(this.tabBarArray,(item:string)=>{
          TabContent(){
            Column(){
              NewsList({currentIndex:item})
            }
          }
          .tabBar(item)
        })
    }
  }
}
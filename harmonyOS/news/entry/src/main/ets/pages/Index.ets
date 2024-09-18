import TabBar from '../view/TabBar'

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Column(){
      TabBar()
    }
  }
}
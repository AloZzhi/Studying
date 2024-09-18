import {router} from '@kit.ArkUI'


@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('HelloWorld')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
      Button('你好',{type:ButtonType.Normal,stateEffect:true})
        .width(150)
        .height(100)
        .borderRadius(50)
        .fontSize(40)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Top },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
        .onClick(()=>{
          router.pushUrl({url:'pages/Second'})
        })
    }

    .height('100%')
    .width('100%')

  }
}
import { router } from '@kit.ArkUI'

@Entry
@Component
struct Second{
  @State msg:string ='hello HarmonyOS'

  build() {
    Row(){
      Column(){
        Text(this.msg)
          .fontSize(50)
          .onClick(()=>{
            router.back();
          })
      }
    }
  }
}
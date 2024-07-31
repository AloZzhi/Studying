import {
  pipeline,
  env,
} from "https://jsd.cdn.zzko.cn/npm/@xenova/transformers@2.6.0";
env.allowLocalModels = false;

class MyTranslationPipeline {
  static task = 'translation'
  static model = 'Xenova/nllb-200-distilled-600M' 
  // 单例模式 
  static instance = null
  // MyTranslationPipeline.getInstance() 绕过new 
  static async getInstance(progress_callback = null) {
      if (this.instance === null) {
          this.instance = pipeline(this.task, this.model, {
              progress_callback
          })

      }
      return this.instance
  }
}
// MyTranslationPipeline.getInstance()

// new MyTranslationPipeline()
// new MyTranslationPipeline()

// document  this 不能用 
self.addEventListener('message', async (event) => {
  // const text = event.data.text
  // const pipe = await pipeline('sentiment-analysis')
  // // console.log(pipe)
  // const result = await pipe(event.data.text);
  // // console.log(result);
  // self.postMessage({
  //     result: result[0].label,
  // })
  let translator = await MyTranslationPipeline.getInstance(x => {
      self.postMessage(x);
  })
})
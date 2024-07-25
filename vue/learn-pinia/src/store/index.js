// import { createPinia } from "pinia";
// import piniaPluginPersist from 'pinia-plugin-persist'

// const store = createPinia()

// store.use(piniaPluginPersist)
// export default store 


import { defineStore } from "pinia";

export const useStore = defineStore("main",{
  //选项式
  state:()=>{
    return{
      num:0,
      name:"dewey",
    }
  },
  getters:{},
  actions:{}
})
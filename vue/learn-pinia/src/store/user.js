import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {//数据源
    return {
      userInfo: {
        name: 'xiaoxiao',
        age: 18,
        sex: '女'
      }
    }
  },
  actions: {//专门用来修改state
    changeUserName(name) {
      this.userInfo.name = name
    },
    changeUserSex(sex) {
      this.userInfo.sex = sex
    },
    changeUserAge(n) {
      this.userInfo.age += n
    }
  },
  getters: {//仓库中的计算属性
    afterAge(state) {//代表上面的state
      return state.userInfo.age + 10
    }
  },
  persist: {//开启数据持久化
    enabled: true,
    strategies: [
      {
        path: ['userInfo'],
        storage: localStorage
      }
    ]
  }
})

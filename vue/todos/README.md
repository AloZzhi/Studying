# 指令
1. v-for
2. v-on

# watch 无缓存
watch(xx,(newVal,oldVal)=>{

})
监听一个属性值，当该属性值变更时，会自动触发回调

# 计算属性 computed 性能更好 有缓存 逻辑重复的情况下不会重复执行
const xxx = computed(() => {
  
  })
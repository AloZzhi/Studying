# rate 组件

- npm init vite
- vue js
- 根据需求定制组件
- 分数的显示
- 可以进行主题定制 -美团 黄 -饿了么 蓝
- 可以打分
  数据驱动的
  - score 父
  - rate 子组件 私有状态 驱动评分选择评分 value-> click 决定
    通过 emit('update-score',value)传输值
  - mouseover 事件 mouseout

//行内块级元素可以设计宽度

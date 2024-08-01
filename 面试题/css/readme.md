# 说说你对 css 盒子模型的理解

- 是什么
  浏览器在渲染页面时，会将容器渲染陈包含 content、padding、margin 四部分的矩形

- 特点

1. 标准盒模型 width = content
2. IE 盒模型： width = content + padding + border

- 切换方法
  box-sizing : border-box || content-box

# 2.css 中的选择器有哪些？优先级？

- ! important>行内样式>id>class>(后代选择器，子集选择器，兄弟选择器)>标签
- 子集和后代选择器没有权重区分
- 兄弟选择器比class高一点（取决于+左右的权重）

1. id
2. class
3. 标签选择器 
4. 后代选择器 
5. 子集选择器 >
6. 兄弟选择器 +
7. 群组选择器 ,
8. 属性选择器
9. 伪类选择器
10. 伪元素选择器


# 3. 说说em,rem,vw,vh,px的区别
- 是什么
css3之前的 px,em,%    css3 创建了新的单位 rem，vw， vh， 
为了在不同场景下做更好的适配

- 区别：
1. 绝对单位： px
2. 相对单位 

# 4. css中有哪些方式可以隐藏一个元素？
1. display:none;            无文档流，不触发事件，会回流重绘
2. opacity:0;               有文档流，会触发事件，不会回流，会重绘
3. width:0;height:0;        无文档流，不触发事件，会回流重绘
4. visibility:hidden;       有文档流，不触发事件，不会回流，会重绘
5. clip-path:polygon(0px 0px,0px 0px,0px 0px,0px 0px) 有文档流，不触发事件，不会回流，会重绘


5. 谈谈你对BFC的理解
- 是什么
   BFC是块级格式化上下文，是一种特殊的容器，拥有一套自己的渲染规则

- 规则
  1. BFC容器内部子容器依据遵从块级，行内块，行内的排列
  2. BFC容器在计算高度时，会将浮动元素的高度也计算在内
  3. BFC容器的margin-top 不会跟子容器的 margin-top 重叠

- 触发条件
  overflow：hidden || XXX
  float：right || left
  display : table-xxx || inline-xxx || flex || grid
  position:absolute || fixed 


- 应用场景
  1. 清除浮动
  2. 防止margin重叠


# 6. 元素水平垂直居中的方法有哪些？
  - 已知父子容器宽高：margin

  - 未知父容器，已知子容器：margin + calc || position + margin负值 || position + margin auto

  - 未知父子容器宽高：position + transform || flex || grid || table-cell + vertical-align:middle;+ text-align:center;


# 7. 说说flexbox（弹性盒子）
- 是什么
  弹性布局是css中一种简便高效的布局方式，弹性容器中有主轴（默认为X轴）和交叉轴（Y轴）的概念，主轴方向也可以修改，子容器默认在主轴上排列

- 包含的属性 特点
  1.order：<integer> 默认值0。定义项目的排列顺序，数值越小，排列越靠前。
  2.flex-grow：<number> 默认值0。定义项目的放大比例，值为0时，如果存在剩余空间，也不放大。
  3.flex-shrink：<number> 默认值1。定义项目的缩小比例，如果空间不足，项目将缩小
  4.flex-basis：<length> | auto。 默认值auto。定义在分配多余空间之前，项目占据的主轴空间。
  5.flex：<flex-gorw> <flex-shrink> <flex-basis> | none。三个值简写，推荐使用。三个属性默认值分别为0,1,auto。两个快捷值：auto(1,1,auto)、none(0,0,auto)。实际应用：flex：1==>flex:1 1 0%;
  6.align-self:auto | flex-start | flex-end | center | baseline | stretch。 允许单个项目与其他项目有不一样的对齐方式。可覆盖align-items。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

- 应用场景

  1. 三栏布局
  2. 居中


# 8. 如何实现三栏布局

1. 弹性
2. 圣杯
3. 双飞翼


# 9. css3新增了那些属性
1. border-radius 圆角
2. box-show
3. border-image 边框放图片


# 10.css 画三角


# 11. 画一条0.5px的线

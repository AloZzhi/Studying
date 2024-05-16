# BFC
block formatting context  ---块级格式化上下文

# margin重叠
margin重叠指的是两个或多个盒子（块级元素）的margin会发生重叠，重叠后，margin值取最大值。
只发生在上下，左右不会重叠。

怎么解决？方案：BFC，创建块级格式化上下文，解决margin重叠问题。

# BFC 布局规则
1. 内部的Box会在垂直方向，一个接一个的放置。
2. bfc容器内部和外部的容器相互隔离，互不影响。---解决margin重叠问题。
3. bfc容器内，相邻元素的margin在垂直方向会重叠。
4. bfc容器会把浮动容器设置高度。不会把所有脱离文档流的元素都设置高度比如绝对定位。

# 触发bfc
1. overflow: hidden || auto || scroll || overlay
2. 浮动元素，float: left || right
3. 绝对定位元素，position: absolute || fixed
4. display: inline-block 
5. display: table-cell 元素，table-xxx 元素
6. display: flex || inline-flex 弹性容器

清除浮动，解决margin重叠 和bfc的关系？？


# 1.盒子模型
说说你对盒子模型的理解
- 是什么
在网页布局中，浏览器会把页面中的元素渲染成一个个的盒子，这些盒子通常包括四个区域，content padding border margin 
内容 内边距 边框 外边距 组成了一个盒子模型。
- 有什么特点
在css中，盒子模型可以分为有两种：标志盒子模型和IE怪异盒子模型。
两者有什么不同点吗？其中，设置标准盒子模型的宽高，width和height指的是content内容的宽高，但是在怪异盒子模型中，设置元素的宽高指content+padding+border的宽高。
标准盒子模型：width/height:content
IE怪异盒子模型： width/height:content+border+padding

box-sizing:content-box 使用标准盒子模型的规则
box-sizing:border-box 使用怪异盒子模型

- 应用场景
浏览器默认使用的盒子模型是标准盒子模型，如谷歌浏览器，width/height直接设置content的宽高。
针对不同的应用场景，如果想要改变计算规则，可以使用box-sizing：border-box ，使用IE怪异盒子模型计算规则。

# 2.css选择器
- 是什么
在前端开发中，css选择器是用于定位文档树中的元素并应用样式的关键工具。那么我们最常见的选择器有哪些呢？
首先，最常见的基础选择器有 id选择器，类选择器，标签选择器，通配符选择器，属性选择器，后代选择器，子代选择器>，兄弟选择器~，相邻兄弟选择器+，群组选择器，伪类选择器:，伪元素选择器::。

- 有什么特点
1. 首先这些元素共有的特点就是优先级。在css中，区分选择器的优先级是相当重要的，因为他决定了当多个规则用于一个元素时，哪条样式规则被最终采用。
对于优先级的基础比较来说：impotant!>内联样式>id>类>标签选择器。
对于选择器组合起来的复杂样式 我们可以采用计算 a,b,c,d 来比较优先级。
a:内联样式出现的次数
b:id选择器出现的次数
c:类选择器，伪类选择器，属性选择器出现的次数
d:标签选择器出现的次数
计算各级次数后从左向右进行比较， 得出比如 1113 和1200，1200的优先级就比1113的优先级要高。


2. 对于个别特殊的选择器来说，我们也有一些指的注意的点，
比如说子代选择器只选择相邻子代但是后代选择器可以选择任意子代；相邻兄弟选择器只能选择相邻的兄弟，但是兄弟选择器可以选择所有相邻的兄弟。
其中值得注意的是伪类选择器和伪元素选择器。
伪类选择器：用于定义元素在其特定状态下的样式，:hover用于定义当鼠标悬停在元素上时的样式，:active表示元素被激活（如点击）时的样式，而:nth-child(n)可以根据元素在其父元素中的位置应用样式。
伪元素选择器：允许你为元素的部分内容添加样式而不是整个元素本身。::before和::after可以在元素的内容之前或之后插入生成的内容，并对其进行样式化，而不需要修改HTML结构。

# 3. 说说em/rem/vh/vw的区别
css 的计量单位可以分为绝对单位和相对单位。最常见的绝对单位就是px，em/rem/vh/vw都是相对单位。
一个px代表屏幕上的一个物理发光点。当我们设置width:100px时，实际是将容器的宽度设置为100个像素点。再比如浏览器的默认字体大小font-size：16px,实际上是默认字体大小为16个像素点。
在开发过程中，我们可以通过设置rem的字体大小来简化开发，这样只需要调整根元素的字体大小就能影响整个页面的元素显示效果。
这两个单位的区别在于他们大小的基准点不同。em大小的基准点为其父容器的字体大小；rem就是root em ，大小的基准点是你在html上设置的字体大小。
vw/vh 大小的基准点是视口的大小，1vh就是1%视口的高。使用vw/vh开发能够让容器根据屏幕（可视窗口）的宽高调整自己的宽高。
- 相对单位通常和媒体查询一起用于实现响应式布局。
1. 移动端适配方案:rem || 媒体查询
2. pc端适配方案： rem || %+媒体查询
- 媒体查询：媒体查询是实现响应式布局的基本原理，通过 @media 根据不同设备的屏幕尺寸、方向以及其他特性来定制网页的设计和布局。
- 响应式设计：响应式网站设计是一种网络页面设计布局，这种设计布局会根据用户的行为如缩放屏幕等操作进行相应的响应和调整。

# 4. css中有哪些方法可以隐藏元素?他们的区别是什么/
1. display:none        不占据文档流，不触发点击事件
2. opacity:0             占据文档流，可触发点击事件
3. visibility:hidden     占据文档流，不触发点击事件
4. 缩放transform:scale(0) 占据文档流，不触发事件 
5. 裁剪clip-path：polygon(0 0,0 0,0 0,0 0) 占据文档流，不触发事件 
6. heigth,width:0       不可隐藏文本内容，需要使用overflow:hidden隐藏 。有内容是可以触发点击事件
7. 绝对定位 left：-9999px  绝对定位脱离文档流，不可触发点击事件

- clip-path:polygon()的坐标怎么使用：左上角为原点下右为正。最少接受3个点的坐标，或者4+个点相交形成的面

# 5. 说说你对BFC的理解
- 是什么
bfc就是块级格式上下文，是浏览器中的一块独立的渲染区域，有自己的一套渲染规则。
- 有什么特点/渲染规则
 在bfc容器中两个相邻的盒子会出现margin重叠的问题
 bfc区域不与float区域重叠
 计算bfc容器高度时，内部的浮动子元素也参与计算
 内部子元素的盒模型不会影响到bfc外部的元素

- 怎么实现/触发bfc容器的方法
    1. 使用html,我门的页面是一个巨大的bfc
    2. 使用浮动 float:left、right
    3. 使用overflow:auto、hidden、scoll
    4. 使用定位 position:absoulte、fixed
    5. 使用布局 display:table、fixed、grid  ||  inline-flex、-grid、-table、-block ||  table-xxx
- 应用场景
    1. 解决margin重叠问题
    2. 清除内部浮动，解决高度塌陷(父容器设置为BFC)
    3. 自适应多栏布局*

# 6. 元素水平居中的方法
3种定位，3种布局
- 将父容器设置为相对定位relative，将子容器设置为绝对定位absolute
1. 定位 + left:0 right:0 top:0 bottom:0 margin：auto
2. 定位 + 在已知子元素宽高的情况下 left:50% top:50% margin-top/left：负值回子元素的一半 
3. 定位 + left:50% top:50%  transform:translate(-50%,-50%)

4. display:flex + justify-content:center + align-items:center
5. display:grid + justify-content:center + align-items:center
6. table布局 父元素：display:table-cell + vertical-align:middle + text-align:center  子元素： display:inline-block


# 7. 谈谈你对css动画的理解
1. transform:translate(120px,50%)位移、scale(2,0.5)缩放、rotate(0.5turn)旋转、skem(30deg,20deg)倾斜
2. 过渡动画 transition (css属性,花费时间,效果曲线,延迟时间)
3. 自定义动画 animations + @keyframes
实战

# 8. 实现响应式布局的方式有哪些？
- 什么是响应式布局
响应式布局是一种页面设计布局方式，他能根据用户的行为比如缩放屏幕调节视口大小进行相应的响应和调节。
1. 媒体查询 
2. % 
3. rem
4. vh/vw

# 9. css性能优化
1. 首页使用内联样式,将关键的css内联到html文件中
2. 异步加载css
3. 资源压缩:使用webpack、rollup等模块化工具将css代码进行压缩,使文件变小,大大降低浏览器加载时间
4. 合理使用选择器
5. 减少使用昂贵的属性
6. 不使用@import 引入css样式文件

# 10. 实现文本溢出则省略
- 单行文本溢出
overfolw:hidden 文本超出就隐藏
text-overflow:ellipsis 文本超出打省略号
white-space:nowrap 禁止文本换行

- 多行文本溢出
overflow:hidden
text-overflow:ellipsis
display:-webkit-box 设置为盒子模型，-webkit让谷歌读懂
-webkit-line-clamp:2 限制元素的行数
-webkit-box-orient:vertical 设置元素排列为垂直方向

# 11. 使用css画三角形
- 利用边框画三角形
将元素的内容区域宽高设置为0，通过调整不同方向边框的颜色与透明度可以实现。
border-left-color:transparent;border-bottom-color:transparent;左边和下面是透明状态，剩下一个三角形

- 利用clip-path画三角形
clip-path:polygon(0 0,0 0,0 0) 点交叉形成的面为你裁剪下来的图像


# 12. 显示12px以下的字体
现在的浏览器以及支持显示1px的字体
- zoom：0.5 将元素缩小到原来的一半
- transform：scale(0.5) 将元素缩小到原来的一半

# 13. 聊聊css预处理器
less、sass、stylus
css预处理器是对原生css的扩展，可以让css代码更优雅，更易维护。
他们最常使用的特性有：变量、函数、嵌套、代码混合mixin、代码模式化

# 14. 实现多栏布局
1. float+margin
使用float固定两边宽度，再使用margin-left和margin-right 控制中间部分与两边的间距
2. 定位+margin
父元素使用相对定位，两边使用absolute绝对定位,分别使用left:0和right:0将两栏固定在两边；在中间使用margin-left和margin-right控制中间部分与两边的间距
3. 使用flexbox弹性布局
将父元素设置为弹性盒子display:flex,在子元素中分别设置flex:1，让子元素以1：1：1的比例占满剩余空间
4. 使用grid网格布局
将父元素设置为网格布局，并通过grid-template-columns属性设置三栏的比例
 display: grid;
 grid-template-columns: 1fr 2fr 1fr; /* 定义三栏的比例 */
5. 使用表格布局
 父元素设置为 display: table;子元素 display: table-cell;再设置子元素中三栏的width。


# 15. flex布局
1. 弹性容器会让子容器默认继承主轴的交叉轴上的 100% 的宽度或高度，flex:1 可以让子容器以1：1：1的比例占满剩余空间
2. flex的3个值分别是 flex-grow flex-shrink flex-basis
flex-grow定义了当容器中有剩余空间时，项目扩大的比例，值越大扩展得越多。
flex-shrink决定了在空间不足时，项目的缩小比例，值为0则该项目不缩小。
如果子元素小于父容器，子元素可以缩小。如果子元素大于父容器，则子元素不可放大。
  

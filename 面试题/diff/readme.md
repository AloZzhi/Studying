# 判断量节点是否相同
==> 判断key是否相同
==> 判断标签名是否相同
==> 判断标签上的属性是否相同

# diff（目的：找出差异，使最小化更新视图）
1. 旧首节点，新首节点，旧尾节点，新尾节点
2. 不是相同的节点==>直接销毁 oldValue,启用newVnode
3. newVnode是不是文本节点（直接让浏览器修改文字）
4. 有新的children 没有旧的children （记录新增）
5. 没有新的children 有旧的children （记录删除）
6. 都有： （diff工作 核心工作 两两节点比较）


# key为什么不能是index
1. diff中判断两个节点是否相同首先判断的就是两个节点的key是否相同，如果用index作为key，index不会随着元素位置的变更而移动，从而导致相同可复用的节点被认为不相同，降低了dom的复用性


# 可不可以用随机数做key
不能，随机数会重新生成，不相等


# 为什么一定要有key
key做为唯一表示，没有key就相当于用index做key


# 虚拟dom优点
1. 跨平台
2. 分摊了浏览器渲染线程的压力，减少了回流



3. 开销很多v8的性能
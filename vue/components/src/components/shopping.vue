<template>
  <div class="shopping">
    <table>
      <thead>
        <th>序号</th>
        <th>书籍名称</th>
        <th>出版日期</th>
        <th>价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="(book,index) in books">
          <td>{{ index +1}}</td>
          <td>{{book.name}}</td>
          <td>{{book.date}}</td>
          <td>{{book.price}}</td>
          <td>{{ book.count }}</td>
          <td>
            <button :disabled= "book.count<=0" @click="decrementCount(index)">-</button>
            <span class="counter">{{ book.count }}</span>
            <button @click="addCount(index)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3>总价格：{{ totalPrice }}</h3>
  </div>
</template>

<script setup>
import { reactive,computed } from 'vue';

const books = reactive(
[
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        },
      ]
)

const totalPrice = computed(()=>{
  let total=0
  books.forEach(item=>{
    total += item.price *item.count
  });
  return total
})

const addCount = (index)=>{
// console.log(index);
    books[index].count++
}

const decrementCount = (index)=>{
// console.log(index);
    books[index].count--
    if(books[index].count>0){
     
    }
}
</script>

<style lang="css" scoped>
.shopping{

}
table{
   margin: 0 auto;
   border: 1px solid #0d40e8;
   border-collapse: collapse;
   border-spacing: 0;
}
th,td{
  padding: 8px 16px;
  border: 1px solid #0d40e8;
}
.counter{
  margin: 0 5px;
}
</style>
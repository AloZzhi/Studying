var mrXu = {
    name: 'Mr.Xu',
    age: 20,
    sex: 'male',
    say: function () {
        console.log('hello, my name is ' + this.name);
    },
    drink: function () {
        console.log('I drink coffee');
    },

}

mrXu.grilFriend = 'lilei'
console.log(mrXu);
var abc = 'girlFirend'
// 删除  delete mrXu.sex
// mrXU.abc = '张若琳'  这里只会把abc当成属性去增加
//想要取到abc中的值作为属性加到对象中可以用 mrXu[abc] = '张若琳'
//如果不想要abc的值作为属性而是只要abc作为属性可以加个引号 mrXu['abc'] = '张若琳'

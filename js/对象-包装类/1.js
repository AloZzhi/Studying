var mrXu = {
    name: 'Alo',
    age: 19,
    sex: 'female',
    say: function () {
        console.log('hello, my name is ' + this.name);
    },
    drink: function () {
        console.log('I drink water');
    },

}

mrXu.grilFriend = 'SunYiNing'
console.log(mrXu);
var abc = 'girlFirend'
// 删除  delete mrXu.sex
// mrXU.abc = '张若琳'  这里只会把abc当成属性去增加
//想要取到abc中的值作为属性加到对象中可以用 mrXu[abc] = '张若琳'
//如果不想要abc的值作为属性而是只要abc作为属性可以加个引号 mrXu['abc'] = '张若琳'

var todoData = [];

var addTodo = document.querySelector('.btn');
var todoList = document.getElementById('todo-list');



// 新增按钮
function addNewTodo() {
    // 获取input中的内容

    if (document.getElementById('newTodo').value.trim() != '') {
        todoData.push({
            id: Math.floor(Date.now()),
            title: document.getElementById('newTodo').value,
            completed: false
        })

        // 渲染新的li
        render();
    }
}

// 将toDoData中的数据渲染出来
function render() {
    var str = '';
    todoData.forEach(function (item) {
        str += `
            <li class="item">
                <div class="flex">
                    <input type="checkbox" class="item-check">
                    <p class="item-content">${item.title}</p>
                    <span class="close" data-id="${item.id}" >×</span>
                </div>
            </li>
        `
    })
    todoList.innerHTML = str;

}

addTodo.addEventListener('click', addNewTodo);

todoList.addEventListener('click', delete_list);


function delete_list(event) {

    if (event.target.classList.contains('close')) { // 判断点击的元素是否是关闭按钮
        var id = event.target.dataset.id; // 获取关闭按钮的 data-id 属性值
        for (var i = 0; i < todoData.length; i++) {

            if (todoData[i].id == id) {
                todoData.splice(i, 1); // 根据 id 从数组中删除对应的待办事项
            }
        }
        render(); // 重新渲染待办事项列表
    }
}

//todoList 得响应式业务封装为hook函数
import {get} from 'vant/lib/utils'
import { ref, computed } from 'vue'

export const useTodos = () => {
  let title = ref("")//input
  const todos = ref([
    {
      "title": "学习hooks，一夜暴富",
      "done": false
    }
  ])

  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false
    })

    function clear() {
      todos.value = todos.value.filter(v => !v.done)
    }

    let active = computed(() => {
      return todos.value.filter(v => !v.done).length;
    })

    let all = computed(() => {
      return todos.value.length;
    })

    let allDone = computed({
      get: function() {
        return active.value == 0
      },
      set: function(value) {
        todos.value.forEach((todo) => {
          todo.done = value
        })
      }
    })
    return {
      title,
      todos,
      addTodo,
      clear,
      active,
      all,
      allDone
    }
  }
}
function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

class SuperTask {
  constructor(parallCount = 2) {
    this.parallCount = parallCount//并发量
    this.tasks = []
    this.runningCount = 0//正在运行的任务量
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({
        task, resolve, reject
      })
      this._run()
    })
  }

  _run() {//依次运行tasks中的任务
    while (this.runningCount < this.parallCount && this.tasks.length) {
      const { task, resolve, reject } = this.tasks.shift()
      this.runningCount++
      task().then(resolve, reject).finally(() => {
        this.runningCount--
        this._run()
      })
    }

  }
}

const superTask = new SuperTask()

function addTask(time, name) {
  superTask
    .add(() => timeout(time))
    .then(()=>{
      console.log(`任务${name}完成`);
    })
}

addTask(10000,1)
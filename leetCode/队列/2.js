class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek()); // 输出 1
console.log(queue.size()); // 输出 3
console.log(queue.dequeue()); // 输出 1
console.log(queue.dequeue()); // 输出 2
console.log(queue.isEmpty()); // 输出 false
console.log(queue.dequeue()); // 输出 3
console.log(queue.isEmpty()); // 输出 true
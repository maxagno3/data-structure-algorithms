class Queue {
  // array is used to implement a queue.
  constructor() {
    this.items = [];
  }

  // enqueue
  // adds element to the rear of the queue.
  enqueue(element) {
    this.items.push(element);
  }

  // dequeue
  // removes element from front of the queue.
  // returns underflow when called on empty queue.
  dequeue() {
    if (this.isEmpty()) return "underflow.";
    return this.items.shift();
  }

  //front.
  // returns first elememt from the queue.
  front() {
    if (this.isEmpty()) return "No elemnts in the queue";
    return this.items[0];
  }

  // isEmpty.
  // returns true if the queue is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // printQueue
  // returns all elements of the queue.
  // concat all elements of the queue in a string and return it.
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Implementation.
let queue = new Queue();

console.log(queue.dequeue());

console.log(queue.isEmpty());

// adding elements.
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

console.log(queue.front());

console.log(queue.dequeue());

console.log(queue.front());

console.log(queue.dequeue());

console.log(queue.printQueue());

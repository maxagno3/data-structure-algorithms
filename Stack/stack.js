// stack works on the principle of FILO(first in last out) and LIFO(last in first out)

class Stack {
  constructor() {
    this.items = [];
  }

  // adds an element at the top of the stack.
  push(element) {
    this.items.push(element);
  }

  // removes top most element in the stack.
  pop() {
    if (this.items.length === 0) return "underflow";
    return this.items.pop();
  }

  // returns top most element in the stack.
  peek() {
    return this.items[this.items.length - 1];
  }

  // returns true if the stack is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // returns a string in which all the elements of the stack are concatenated.
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Implementation.
let stack = new Stack();

console.log(stack.isEmpty());

console.log(stack.pop());

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack());

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.printStack());

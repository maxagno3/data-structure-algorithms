class Node {
  constructor(element) {
    this.element = element; //holds data of a node.
    this.next = null; // pointer to next node initialized to the null value.
  }
}

class LinkedList {
  constructor() {
    this.head = null; // stores first node of the list.
    this.size = 0; // number of nodes in the list.
  }

  // add element.
  add(element) {
    // create a new node.
    let node = new Node(element);

    // to store current node.
    let current;

    // if list is empty add the element and make it head.
    if (this.head === null) this.head = node;
    else {
      current = this.head;

      // if list is not empty then iterate to the end of the list.
      while (current.next) {
        current = current.next;
      }

      // add node.
      current.next = node;
    }
    this.size++;
  }

  // insertAt(element, index).
  insertAt(element, index) {
    if (index > 0 && index > this.size) return false;
    else {
      // create a new node.
      let node = new Node(element);
      let current, previous;
      current = this.head;

      // add element to the first index.
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let count = 0;

        // iterate over the list to find the position to insert.
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }

        // adding an element.
        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
  }

  // removeFrom(index).
  removeFrom(index) {
    if (index > 0 && index > this.size) return -1;
    else {
      let current,
        previous,
        count = 0;
      current = this.head;
      previous = current;

      //deleting first element.
      if (index == 0) {
        this.head = current.next;
      } else {
        // iterate over the list to the position to remove an element.
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
        // remove the element.
        previous.next = current.next;
      }
      this.size--;

      // return removed element.
      return current.element;
    }
  }

  // removeElement(element).
  removeElement(element) {
    let current = this.head;
    let previous = null;

    // iterate over the list.
    while (current != null) {
      // comparing element with current.
      // element if found then remove and return true.
      if (current.element === element) {
        if (previous == 0) this.head = current.next;
        else previous.next = current.next;
        this.size--;
        return current.element;
      }
      previous = current;
      current = current.next;
    }
    return -1;
  }

  // indexOf(element).
  indexOf(element) {
    let count = 0;
    let current = this.head;
    while (current != null) {
      if (current.element === element) return count;
      count++;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size == 0;
  }

  size_of_list() {
    console.log(this.size);
  }

  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.element + " ";
      current = current.next;
    }
    console.log(str);
  }
}

// Implementation.
// creatinf an object for linked list class.
let ll = new LinkedList();
//testing if the list is empty.
console.log(ll.isEmpty());

// adding element to the list.
ll.add(10);
// prints the value
ll.printList();
// shows the size of the list.
console.log(ll.size_of_list());

ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.printList();

// removing the element from the list.
console.log("is element removed ?" + " " + ll.removeElement(50));
ll.printList();
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at position 2.
ll.insertAt(60, 2);
ll.printList();
console.log("is List Empty ? " + ll.isEmpty());
// remove 3rd element from the list.
console.log(ll.removeFrom(3));

ll.printList();

var LinkedList = function() {
  var list = {};
    list.head = null;
    list.tail = null;
    list.addToTail = function(value) {
      if(this.head === null){
        this.head = Node(value)
        this.tail = this.head;
      } else {
        let current = this.head;
        while(current.next) {
          current = current.next;
        }
        this.tail = Node(value)
        current.next = this.tail;
      }
    };
    list.removeHead = function() {
      if(this.head !== null) {
        let deletedHead = this.head; 
        if(this.head.next === this.tail) {
          this.head = this.head.next
          this.tail = null;
        } else {
          this.head = this.head.next;
        }
        return deletedHead.value;
      }
    }
    list.contains = function(target) {
      let current = this.head;
      while(current) {
        if(current.value === target) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
    return list;
  }
  var Node = function(value) {
    var node = {};
    node.value = value;
    node.next = null;
    return node;
  };



// class Node {

//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
  
// }
// class LinkedList {
  
//   constructor() {
//     this.head=null;
//     this.tail=0;
//   }

//  //addAtFirst(data)
//   addAtFirst(data) {
//     this.head = new Node(data, this.head);
//     this.tail++;
//   }

//  //addAtLast(data)
//   addAtLast(data) {
//     let node= new Node(data);
//     let current;

//     //if there are no values create a head
//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next
//       }
//       current.next = node;
//     }
//     this.tail++;
//   }

//  //addAt(data,index)
//   addAt(data, index) {
//     //if index is out of range
//     if (index < 0 || index > this.tail) {
//       return;
//     }
//     //if index is the first one
//     if (index === 0) {
//       this.head = new Node(data, this.head);
//       this.tail++;
//       return;
//     }
//     const node = new Node(data);
//     let previous

//     //set current to first
//     let current=this.head
//     let count = 0;

//     while (count < index) {
//       previous = current;
//       count++;
//       current = current.next
//     }
//     node.next = current;
//     previous.next = node;
//     this.tail++;
//   }
  
//  //removeAt(index)

//  //getAt(index)

//  //clearList()

//  //printListData()
//   printListData() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data)
//       current=current.next
//     }
//   }
// }
// const ll = new LinkedList();
// ll.addAtFirst(100)
// ll.addAtLast(200)
// ll.addAt(300,2)
// ll.addAt(400,3)
// ll.printListData()







// class Node {

//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next
//   }

// }

// class LinkedList {

//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   //addFirst(data)
//   addFirst(data) {
//     this.head = new Node(data, this.head);
//   }

//   //addLast(data)
//   addLast(data) {
//     let current = this.head;
//     let node = new Node(data);
//     while(current.next) {
//       current = current.next;
//     }
//     current.next = node;
//     this.size++;
//   }
//   //addAt(data, index)
//   addAt(data, index) {
//     let node = new Node(data)
//     let current = this.head;
//     let previous, next;
//     let count = 0;
//     //when the index is out of range
//     if(index < 0 || index > this.size) {
//       return;
//     }

//     //when the list is empty
//     if(this.size === 0 || index === 0) {
//       this.addFirst(data)
//     }

//     //when the index is between [0,this.size]
//     while(count < index) {
//       previous = current
//       current = current.next
//       count++;
//     }
//     node.next = current;
//     previous.next = node;
//   }
//   //removeAt(index)
//   removeAt(index) {
//     let current = this.head;
//     let previous, next;
//     let count = 0;
//     while(count < index) {
//       previous = current
//       current = current.next
//       count++
//     }
//     previous.next = current.next
//   }
//   //printListData
//   printListData() {
//     let current = this.head;
//     while(current) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
//   //getAt(index)
//   getAt(index) {
//     let count = 0;
//     let current = this.head;
//     while(count < index) {
//       count++;
//       current = current.next;
//     }
//     return current;
//   }
//   //clearList()
//   clearList() {
//     delete this.head;
//     this.head = null;
//     this.size = 0;
//   }
// }
// const ll = new LinkedList()
// ll.addFirst(100)
// ll.addFirst(200)
// ll.addLast(300)
// ll.clearList()



//ES6
// create a Node class 

// class Node {
//   constructor(value, next = null){
//     this.value = value;
//     this. next = next; 
//   }
// }


// // create the main classs (inkedList)
// class linkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // addFirst(data)
//   addFirst(data) {
//     this.head = new Node(data, this.head)
//     this.size++;
//   }
//   // addLast(data)
//   addLast(data) {
//     let current = this.head;
//     let node = new Node(data)
//     while(current.next) {
//       current = current.next;
//     }
//     current.next = node;
//     this.size++;
//   }
//   //addAt(data, index)
//   addAt(data, index) {
//     if(index < 0 || index > this.size) {
//       return '3asba';
//     }
//     if(index === 0) {
//       return this.addFirst(data)
//     }
//     let node = new Node(data)
//     let current = this.head;
//     let previous; 
//     let count = 0;
//     while(count < index) {
//       previous = current;
//       current = current.next
//       count++;
//     }
//     node.next = current;
//     previous.next = node;
//     this.size++
//   }
//   //removeAt(index)
//   removeAt(index) {
//     if(index < 0 || index > this.size) {
//       return '3asba';
//     }
//       let current = this.head;
//       let count = 0;
//       let previous;
//       while(count < index) {
//         previous = current;
//         current = current.next
//         count++;
//       }
//       // console.log(previous)
//       previous.next = current.next;
//   }
//   //print()
//   print() {
//     let current = this.head;
//     let i = 0;
//     while(current) {
//       console.log(i+' '+current.value)
//       i++;
//       current = current.next
//     }
//   }
//   //getAt(index)
//   getAt(index) {
//     let current = this.head;
//     let count = 0;
//     while(count < index){
//       current = current.next
//       count++
//     }
//     return current;
//   }

//   //contains
//   contains(target) {
//     let current = this.head;
//     while(current) {
//       if(current.value === target){
//         return true;
//       } else {
//         current = current.next;
//       }
//     }
//     return false;
//   }
// }

// var linked = new linkedList()
// linked.addFirst(100)
// linked.addFirst(200)
// linked.addFirst(300)
// linked.addFirst(400)
// linked.addFirst(500)
// linked.addLast(50)
// linked.print()






























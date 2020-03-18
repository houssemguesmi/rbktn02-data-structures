// var Queue = function() {
//   var someInstance={}
//   someInstance.storage={}
//   someInstance.front=0;
//   someInstance.rear=0;
//   for(var key in queueMethods){
//     someInstance[key]=queueMethods[key]
//   }
//   // extend(someInstance, queueMethods)
//   return someInstance;
// };

// // var extend = function(to, from) {
// //   for (var key in from) {
// //     to[key] = from[key];
// //   }
// // };

// var queueMethods = {};

// queueMethods.enqueue = function(value) {
//   this.storage[this.rear]=value
//   this.rear++
// }

// queueMethods.dequeue = function() {
//   if(this.rear > 0) {
//     var deletedItem=this.storage[this.front]
//     delete this.storage[this.front]
//     this.storage[this.front]=this.storage[this.rear-1]
//     delete this.storage[this.rear-1]
//     this.rear--; 
//     return deletedItem;
//   }
// }

// queueMethods.size = function() {
//   return this.rear;
// }

var Queue = function() {
  let someInstance = {}
  someInstance.front = 0;
  someInstance.rear = 0;
  someInstance.storage = {};
  extend(queueMethods, someInstance)
  return someInstance;
}

var extend = function(from, to) {
  for(var key in from) {
    to[key] = from[key];
  }
}

var queueMethods = {}

queueMethods.enqueue = function(value) {
  if(this.rear === 0) {
    this.storage[this.front] = value;
    this.rear++;
  } else {
    this.storage[this.rear] = value;
    this.rear++;
  }
}
queueMethods.dequeue = function() {
  var deletedItem = this.storage[this.front];
  delete this.storage[this.front]
  for(var key in this.storage) {
    this.storage[key-1] = this.storage[key];
  }
  delete this.storage[this.rear-1]
  if(this.rear > 0) {
    this.rear--;
  }
  return deletedItem;
}
queueMethods.size = function() {
  return this.rear;
}
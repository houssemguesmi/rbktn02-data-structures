// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var someInstance = Object.create(queueMethods)
//   someInstance.front=0;
//   someInstance.rear=0;
//   return someInstance
// };

// var queueMethods = {};
// queueMethods.enqueue = function(value) {
//   this[this.rear]=value
//   this.rear++
// }

// queueMethods.dequeue = function() {
//   if(this.rear > 0) {
//     var deletedItem=this[this.front]
//     delete this[this.front]
//     this[this.front]=this[this.rear-1]
//     delete this[this.rear-1]
//     this.rear--; 
//     return deletedItem;
//   }
// }

// queueMethods.size = function() {
//   return this.rear;
// }






var Queue = function() {
    let someInstance = Object.create(queueMethods)
    someInstance.front = 0;
    someInstance.rear = 0;
    someInstance.storage = {};
    return someInstance;
}

let queueMethods = {};

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
    let deletedItem = this.storage[this.front]
    delete this.storage[this.front]
    for(var key in this.storage){
        this.storage[key-1] = this.storage[key];
    }
    if(this.rear > 0) {
        this.rear--;
    }
    delete this.storage[this.rear]
    return deletedItem;
}
queueMethods.size = function() {
    return this.rear;
}
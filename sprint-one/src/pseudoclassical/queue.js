// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   this.rear=0;
//   this.front=0;

// };


// Queue.prototype.enqueue = function(value) {
//   this[this.rear]=value
//   this.rear++;
// };

// Queue.prototype.dequeue = function() {
//   if(this.rear > 0) {
//     var deletedItem=this[this.front]
//     delete this[this.front]
//     this[this.front]=this[this.rear-1]
//     delete this[this.rear-1]
//     this.rear--;
//     return deletedItem
//   }
  
// };

// Queue.prototype.size = function() {
//   return this.rear
// };


// var Qu1= new Queue()

var Queue = function() {
    this.rear = 0;
    this.front = 0;
    this.storage = {};
}

Queue.prototype.enqueue = function(value) {
    if(this.rear === 0) {
        this.storage[this.front] = value;
        this.rear++;
    } else {
        this.storage[this.rear] = value;
        this.rear++;
    }
}
Queue.prototype.dequeue = function() {
    let deletedItem = this.storage[this.front]
    delete this.storage[this.front]
    for(var key in this.storage) {
        this.storage[key-1] = this.storage[key]
    }
    delete this.storage[this.rear-1]
    if(this.rear > 0) {
        this.rear--;
    }
    return deletedItem;
}
Queue.prototype.size = function() {
    if(this.rear === 0) {
        return 0;
    } else {
        return this.rear; 
    }
}
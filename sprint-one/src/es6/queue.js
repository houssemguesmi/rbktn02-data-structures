// class Queue {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   constructor() {
//     this.rear=0;
//     this.front=0;
//   }
//   enqueue(value) {
//     this[this.rear]=value
//     this.rear++
//   }
  
//   dequeue() {
//     if(this.rear > 0) {
//       var deletedItem=this[this.front]
//       delete this[this.front]
//       this[this.front]=this[this.rear-1]
//       delete this[this.rear-1]
//       this.rear--; 
//       return deletedItem;
//     }
//   }
  
//   size() {
//     return this.rear;
//   }
// }
// const Qu1=new Queue()







class Queue {
    constructor() {
        this.front = 0;
        this.rear = 0;
        this.storage = {};
    }

    enqueue(value) {
        if(this.rear === 0) {
            this.storage[this.front] = value;
            this.rear++;
        } else {
            this.storage[this.rear] = value;
            this.rear++;
        }
    }
    dequeue() {
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
    size() {
        if(this.rear === 0) {
            return 0;
        } else {
            return this.rear;
        }
    }
}
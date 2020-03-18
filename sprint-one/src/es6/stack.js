// class Stack {
//   constructor() {
//     this.top=0;
//   }

//   push(value) {
//     this[this.top]=value
//     this.top++
//   }
  
//   pop() {
//     var deletedItem=this[this.top-1]
//     delete this[this.top-1]
//     if (this.top>0) {
//       this.top--
//     }
//     return deletedItem
//   }
  
//   size() {
//     if (this.top >0) {
//       return this.top
//     }
//     else {
//       return 0
//     }
//   }
// }

// const St1=new Stack()



class Stack {
    constructor() {
        this.top = 0;
        this.storage = {};
    }

    push(value) {
        this.storage[this.top] = value;
        this.top++;
    }
    pop() {
        let deletedItem = this.storage[this.top-1];
        delete this.storage[this.top-1];
        if(this.top > 0) {
            this.top--;
        }
        return deletedItem;
    }
    size() {
        if(this.top === 0) {
            return 0;
        } else {
            return this.top;
        }
    }
}
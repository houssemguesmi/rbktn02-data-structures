// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var someInstance=Object.create(stackMethods)
//   someInstance.top=0
//   return someInstance
// };


// var stackMethods = {};
// stackMethods.push = function(value) {
//     this[this.top]=value
//     this.top++;
//   };

// stackMethods.pop = function() {
//       var deletedItem=this[this.top-1]
//       delete this[this.top-1]
//       if (this.top>0) {
//         this.top--
//       }
//       return deletedItem
//   };

// stackMethods.size = function() {
//       if (this.top >0) {
//           return this.top
//         }
//         else {
//           return 0
//         }
//   };


var Stack = function() {
    let someInstance = Object.create(stackMethods)
    someInstance.top = 0;
    someInstance.storage = {};
    return someInstance;
}

let stackMethods = {}
stackMethods.push = function(value) {
    this.storage[this.top] = value;
    this.top++;
}
stackMethods.pop = function() {
    let deletedItem = this.storage[this.top-1]
    delete this.storage[this.top-1]
    if(this.top > 0) {
        this.top--;
    }
    return deletedItem;
}
stackMethods.size = function() {
    if(this.top === 0) {
        return 0;
    } else {
        return this.top;
    }
}

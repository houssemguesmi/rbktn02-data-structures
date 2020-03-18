// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   this.top=0;
// };

// Stack.prototype.push = function(value) {
//   this[this.top]=value;
//   this.top++
// };

// Stack.prototype.pop = function() {
//   var deletedItem=this[this.top-1]
//   delete this[this.top-1]
//   if (this.top>0) {
//     this.top--
//   }
//   return deletedItem
// };

// Stack.prototype.size = function() {
//   if (this.top >0) {
//     return this.top
//   }
//   else {
//     return 0
//   }
// };

// var St1= new Stack()
var Stack = function() {
    this.top = 0;
}
Stack.prototype.push = function(value) {
    this[this.top] = value;
    this.top++;
}
Stack.prototype.pop = function() {
    let deletedItem = this[this.top-1];
    delete this[this.top-1];
    if(this.top > 0) {
        this.top--;
    }
    return deletedItem;
}
Stack.prototype.size = function() {
    return this.top;
}
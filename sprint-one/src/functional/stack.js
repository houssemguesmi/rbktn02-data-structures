// var Stack = function() {
//   var someInstance = {};
//   var top=0;

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below
//   someInstance.push = function(value) {
//     storage[top]=value;
//     top++
//   };

//   someInstance.pop = function() {
//     var deletedItem=storage[top-1]
//     delete storage[top-1]
//     if (top>0) {
//       top--
//     }
//     return deletedItem
//   };

//   someInstance.size = function() {
//     if (top >0) {
//       return top
//     }
//     else {
//       return 0
//     }
//   };
//   return someInstance;
// };




var Stack = function() {

  let someInstance = {}
  someInstance.storage = {}
  let top = 0;

  someInstance.pop = function() {
    let deletedItem = someInstance.storage[top-1]
    delete someInstance.storage[top-1]
    if(top > 0) {
      top--;
    }
    return deletedItem;
  };

  someInstance.push= function(value) {
    someInstance.storage[top] = value;
    top++;
  };

  someInstance.size = function() {
    if(top === 0){
      return 0;
    } else {
      return top;
    }
  };
  return someInstance;
}
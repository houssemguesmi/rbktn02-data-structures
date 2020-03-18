// var Queue = function() {
//   var someInstance = {};
//   var rear=0;
//   var front=0;
//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below

//   someInstance.enqueue = function(value) {
//     storage[rear]=value
//     rear++;
//   };

//   someInstance.dequeue = function() {
//     if(rear > 0) {
//       var deletedItem=storage[front]
//       delete storage[front]
//       storage[front]=storage[rear-1]
//       delete storage[rear-1]
//       rear--;
//       return deletedItem
//     }
    
//   };

//   someInstance.size = function() {
//     return rear
//   };

//   return someInstance;
// };



var Queue = function() {
  let someInstance = {};
  someInstance.storage = {};
  let rear = 0;
  let front = 0;
  
  someInstance.enqueue = function(value) {
    if(rear === 0){
      someInstance.storage[front] = value
      rear++
    } else {
      someInstance.storage[rear] = value;
      rear++
    }
  }

  someInstance.dequeue = function() {
    let deletedItem = someInstance.storage[front]
    delete someInstance.storage[front]
    for(var key in someInstance.storage){
      console.log(key)
      someInstance.storage[key-1] = someInstance.storage[key]
    }
    delete someInstance.storage[rear-1]
    if(rear > 0) {
      rear--;
    }
    return deletedItem;
  }
  
  someInstance.size = function() {
    return rear;
  }
  return someInstance
}
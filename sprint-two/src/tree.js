var Tree = function(value) {
  let newTree = {};
  newTree.value = value;
  newTree.children = [];

  for (let key in treeMethods){
    newTree[key] = treeMethods[key]
  }
  return newTree; 
};

let treeMethods = {};

treeMethods.addChild = function(value) {
    this.children.push(new Tree(value))
};

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  } 
  for(let i = 0; i < this.children.length; i++){
    if(this.children[i].contains(target)){
      return true;
    }
  }
  return false;
};

// treeMethods.contains = function(target) {
//   if(this.value === target) {
//     return true;
//   }
//   for(let i=0; i<this.children.length; i++) {
//     if(this.children[i].contains(target)) {
//       return true
//     }
//   }
//   return false;  // this.children[i].contains(target)
// };



// main class Tree(value)
// class Tree {
//   constructor(value) {
//     this.value = value;
//     this.children = [] ;
//   } 

//   addChild(value, depth = 1, index = 0) {
//     var t = new Tree(value)
//     if(depth === 1) {
//       this.children.push(t)
//       return;
//     }
//     for(let i = 0; i <= index; i++) {
//       if(this.children !== undefined && this.children.length !== 0 && depth !== 1){
//         this.children[i].addChild(value, depth-1, index)
//       }
//       if(index === i) {
//         console.log(this)
//         this.children.push(t)
//       }
//     }
//   }

//   contains(target) {
//     if(this.value === target) {
//       return true;
//     }
//     for(let i = 0; i < this.children.length; i++){
//       if(this.children[i].contains(target)) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// var tree = new Tree(0)
// tree.addChild(1,1,0)
// tree.addChild(4,1,0)
// tree.addChild(5,2,1)
// console.log(tree)


// tree = {value: 0, 
//       children[{value: 1, children:[{value: 1, children:[{value: 11, children:[]}]}, 
//                                     {value: 1, children:[]}]}
//               , {value: 2, children:[]}]}










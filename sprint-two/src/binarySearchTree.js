var BinarySearchTree = function(value) {
    this.storage = {value: value, left: null, right: null};
};

BinarySearchTree.prototype.insert = function(value) {
    if(value > this.storage.value) {
        if(this.right === null){
            this.right = new Node(value);
        } else {
            this.right.insert(value);
        }
    } else if(value === this.storage.value) {
        throw new Error("can't insert a value already inserted");
    } else if(value < this.storage.value){
        if(this.left === null){
            this.left = new Node(value);
        } else {
            this.left.insert(value)
        }
    }
}
BinarySearchTree.prototype.contains = function() {
    
}
BinarySearchTree.prototype.depthFirstLog = function() {

}
var Node = function(value) {
    return {value: value, left: null, right: null}
}
/*
 * Complexity: What is the time complexity of the above functions?
 */

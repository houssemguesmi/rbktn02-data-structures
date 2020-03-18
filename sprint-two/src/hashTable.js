var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // for(let i = 0; i < this._storage.length; i++) {
  //   this._storage[i] = []
  // }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var toStore = {key: k, value: v};
  if(this._storage[index] === undefined) {
    this._storage.set(index, toStore)
  } else {
    if(toStore.key === this._storage[index].key){
      this._storage[index].value = v;
    } else {
      var oldValue = this._storage.get(index);
      this._storage[index] = []
      this._storage[index].push(oldValue)
      this._storage[index].push(toStore)
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(Array.isArray(this._storage.get(index))) {
    for(let i = 0; i < this._storage[index].length; i++) {
      if(this._storage[index][i].key === k) {
        return this._storage[index][i].value;
      }
    }
  } else {
    var storedValue = this._storage.get(index)
    return storedValue.value;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index,'')
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



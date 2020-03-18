var Stack = function() {
    let someInstance = {}
    someInstance.top = 0;    
    someInstance.storage = {};
    extend(stackMethods, someInstance)
    return someInstance;
}

var extend = function(from, to) {
    for(var key in from) {
        to[key] = from[key];
    }
}

var stackMethods = {}
stackMethods.push = function(value) {
    this.storage[this.top] = value;
    this.top++;
}
stackMethods.pop = function() {
    var deletedItem = this.storage[this.top-1]
    delete this.storage[this.top-1]
    if(this.top > 0) {
        this.top--;
    }
    return deletedItem;
}
stackMethods.size = function() {
    return this.top;
}
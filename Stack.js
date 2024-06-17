var Stack = /** @class */ (function () {
    function Stack(capacity) {
        this.items = capacity ? new Array(capacity) : [];
    }
   
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    
    Stack.prototype.size = function () {
        return this.items.length;
    };
    return Stack;
}());

var stack = new Stack(5);

stack.push("Pera");
stack.push("Sandia");
stack.push("Banana");

console.log(stack); 

var poppedItem = stack.pop();
console.log("Popped item:", poppedItem); 

console.log(stack); 

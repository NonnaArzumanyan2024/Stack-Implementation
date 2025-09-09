class Stack {                                            // Define a Stack class
    constructor(){
        this.items = [];                                 // array to store stack elements
        this.count = 0;                                  // number of elements in stack
    }

    push(element) {                                      // Add element to the top of stack
        this.items[this.count] = element;                // place element at current count index
        this.count += 1;                                 // increase count (stack grows)
        console.log(`${element} added to ${this.count}`);

        return this.count - 1;                           // return index where element was added
    }

    pop() {                                              // Remove element from the top of stack
        if (this.count === 0) return undefined;          // if stack is empty, nothing to remove
        let deleteItem = this.items[this.count - 1];     // get top element
        this.count -= 1;                                 // decrease count (stack shrinks)
        console.log(`${deleteItem} removed`);

        return deleteItem;                               // return removed element
    }

    peek() {                                             // Look at the top element without removing it
        console.log(`Top element is ${this.items[this.count - 1]}`);

        return this.items[this.count - 1];               // return top element
    }

    isEmpty() {                                          // Check if stack is empty
        console.log(this.count === 0 ? "Stack is empty" : "Stack is not empty");

        return this.count === 0;                         // true if empty, false if not
    }

    size() {                                             // Get number of elements in stack
        console.log(`${this.count} elements in stack`);

        return this.count;                               // return count
    }

    print() {                                            // Print all elements in stack
        let str = "";

        for (let i = 0; i < this.count; ++i) {
            str += this.items[i] + ' ';                  // build string with all elements
        }

        return str;                                      // return string of stack contents
    }

    clear() {                                            // Clear the stack
        this.items = [];                                 // reset items array
        this.count = 0;                                  // reset count
        console.log("Stack clear");

        return this.items;                               // return empty array
    }
    
}


const stack = new Stack();

// ------------------- Example 1 -------------------

console.log("Example 1: Basic push and print");
stack.push(10);                                           // add 10
stack.push(20);                                           // add 20
stack.push(30);                                           // add 30
console.log(stack.print());                               // "10 20 30"
console.log("Stack size:", stack.size());                 // 3
console.log("Top element:", stack.peek());                // 30

// ------------------- Example 2 -------------------

console.log("\nExample 2: Pop elements");
stack.pop();                                              // remove 30
console.log(stack.print());                               // "10 20"
stack.pop();                                              // remove 20
console.log("Top element after pop:", stack.peek());      // 10
console.log("Is stack empty?", stack.isEmpty());          // false

// ------------------- Example 3 -------------------

console.log("\nExample 3: Clear stack");
stack.clear();                                            // remove all elements
console.log(stack.print());                               // ""
console.log("Is stack empty now?", stack.isEmpty());      // true

// ------------------- Example 4 -------------------

console.log("\nExample 4: Mix of operations");
stack.push(100);
stack.push(200);
stack.pop();                                              // removes 200
stack.push(300);
console.log("Stack elements:", stack.print());            // "100 300"
console.log("Stack size:", stack.size());                 // 2
console.log("Top element:", stack.peek());                // 300

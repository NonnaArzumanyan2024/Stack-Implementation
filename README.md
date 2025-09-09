# Stack Data Structure

A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.  
This means that the last element added to the stack will be the first one to be removed.  

---

## Key Concepts

- Top: The element at the top of the stack (most recently added element)  
- Bottom: The first element added to the stack  
- Operations: Stacks typically support the following operations:

  - push(element) → Add an element to the top of the stack
  - pop() → Remove and return the top element
  - peek() → View the top element without removing it
  - isEmpty() → Check if the stack is empty
  - size() → Get the number of elements in the stack
  - clear() → Remove all elements from the stack
  - print() → Display all elements in order (optional for implementation)

---

## Characteristics

- LIFO (Last In, First Out): The last element added is the first to be removed  
- Dynamic Size: The stack can grow and shrink as elements are added or removed  
- Memory Efficiency: Only the top element needs to be directly accessed for most operations  

---

## Applications of Stack

1. Function Call Stack in programming (manages function calls)  
2. Undo/Redo Operations in text editors  
3. Expression Evaluation: e.g., converting infix to postfix or evaluating postfix expressions  
4. Balanced Parentheses Checking  
5. Backtracking Algorithms: e.g., maze solving, puzzle solving  

---

## Time Complexity of Stack Operations

| Operation | Time Complexity|
|-----------|----------------|
| push      | O(1)           |
| pop       | O(1)           |
| peek      | O(1)           |
| isEmpty   | O(1)           |
| size      | O(1)           |
| print     | O(n)           |
| clear     | O(1)           |

---

## Space Complexity of Stack Operations

| Operation      | Space Complexity|
|----------------|-----------------|
| Stack storage  | O(n)            |
| push           | O(1)            |
| pop            | O(1)            |
| peek           | O(1)            |
| isEmpty        | O(1)            |
| size           | O(1)            |
| print          | O(n)            |
| clear          | O(1)            |






class Stack {
    constructor() {
      this.items = [];
    }
  
    pushh(element) {
      this.items.push(element);
      console.log(this.items);
    }
  
    popp() {
      if (this.isEmpty()) {
        return "Stack is empty ";
      }
      return this.items.pop();
    }
  
    peekk() {
      if (this.isEmpty()) {
        return "Stack is empty ";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  let stackObj = new Stack(); 
  
  console.log(stackObj.items); 
  stackObj.pushh(1); 
  stackObj.pushh(2);
  stackObj.pushh(3); 
  stackObj.pushh(4); 
  console.log(stackObj.popp()); 
  console.log(stackObj.items); 
  console.log(stackObj.peekk()); 
  console.log(stackObj.items); 
  
  // balanced expression
  
  function isBalanced(expression) {
    let stack = [];
    for (let char of expression) {
      
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char); 
      
      } else if (char === ")" || char === "}" || char === "]") {
        if (stack.length === 0) {
          return false;
        }
        let top = stack.pop(); 
        if (
          (char === ")" && top !== "(") ||
          (char === "}" && top !== "{") ||
          (char === "]" && top !== "[")
        ) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isBalanced("{[()]}"));
  console.log(isBalanced("{[(])}"));
  

  class Stack {
    constructor() {
      this.item = [];
      this.top = -1; 
  
    push(element) {
      this.top++; // 0
      this.item[this.top] = element;
    }
  
    pop() {
      if (this.top < 0) {
        console.log("Stack is underflow");
        return undefined;
      }
      let popedItem = this.item[this.top]; 
      this.top--;
      return popedItem;
    }
  
    peek() {
      if (this.top < 0) {
        console.log("Stack is underflow");
        return undefined;
      }
      return this.item[this.top];
    }
  
    isEmpty() {
      return this.top < 0;
    }
  }
  
  let stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  console.log(stack.item);
  console.log(stack.pop());
  console.log(stack.item);
  console.log(stack.peek());
  console.log(stack.isEmpty());
  
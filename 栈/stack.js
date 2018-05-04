function Stack() {
    this.dataStore = [];
    this.pop = pop;
    this.push = push;
    this.top = 0;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

// 入栈
function push(element){
    this.dataStore[this.top++] = element;
}

// 出栈
function pop(){
    if(this.top == 0) {
        console.log("栈已经空了");
    }
    return this.dataStore[--this.top];
}

// 返回栈顶元素
function peek() {
    return this.dataStore[this.top-1];
}

// 存储了多少个元素
function length() {
    return this.top;
}

// 清空
function clear() {
    this.top = 0;
}


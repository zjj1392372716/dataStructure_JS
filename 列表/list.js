/**
 *  列表
 */

function List() {
    this.listSize = 0; // 列表中元素的个数
    this.pos = 0; // 当前位置索引
    this.dataStore = []; // 数据储存的数组
    this.clear = clear; // 清空列表
    this.find = find; // 查询
    this.toString = toString; // 显示输出
    this.insert = insert; // 插入
    this.append = append; // 往后添加
    this.remove = remove; 移除某一个元素
    this.front = front; // 移动到第一个元素的位置
    this.end = end; // 移动到最后一个元素的位置
    this.prev = prev; // 向前移一个
    this.next = next; // 向后
    this.hasNext = hasNext; // 是否还有下一个
    this.hasPrev = hasPrev; // 是否还有上一个
    this.length = length; // 列表的长度
    this.currPos = currPos; // 获取当前的pos值
    this.moveTo = moveTo; // 移动到某一个位置
    this.getElement = getElement; // 获取元素
    this.contains = contains; // 判断时候还有某一个值
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for(var i = 0; i< this.dataStore.length; i++) {
        if(this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var index = this.find(element);
    if(index > -1){
        this.dataStore.splice(index, 1);
        --this.listSize;
        return true;
    } else {
        return false;
    }
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var index = this.find(after);
    if(index > -1) {
        this.dataStore.splice(index+1, 0 , element);
        ++this.listSize;
        return true;
    } else {
        return false;
    }
}


function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}

function contains(element) {
    for(var i = 0; i< this.dataStore.length; i++) {
        if(this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

// 第一个元素的索引
function front() {
    this.pos = 0;
}

// 最后一个元素的索引
function end(){
    this.pos = this.listSize - 1;
}

function next() {
    if(this.pos < this.listSize) {
        this.pos ++;
    }
}

function prev() {
    --this.pos;
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function hasNext() {
    return this.pos < this.listSize;
}

function hasPrev() {
    return this.pos >= 0;
}

// // 从前往右
// for(name.front(); name.hasNext(); name.next()) {
//     console.log(name.getElement());
// }
// // 从右往左
// for(name.end(); name.hasPrev(); name.prev()) {
//     console.log(name.getElement());
// }
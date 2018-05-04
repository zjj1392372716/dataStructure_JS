#### 列表

一组有序的数据。比如： 待办事项列表、 购物清单、榜单、等。

列表的抽象数据类型并未指明列表的存储结构，这里我们使用`dataStore`数组来存储。

> 实现类

```javascript
function List() {
    this.listSize = 0; // 列表中元素的个数
    this.pos = 0; // 指针变量
    this.dataStore = []; // 存储数据的数组
    this.clear = clear; // 清空
    this.find = find; // 查找
    this.toString = toString;  // 打印显示
    this.insert = insert; // 插入
    this.append = append; // 尾部插入
    this.remove = remove; // 移除
    this.front = front; // 指向头
    this.end = end; // 指向尾
    this.prev = prev; // 向前
    this.next = next; // 向后
    this.hasNext; // 判断是否有下一个
    this.hasPrev;
    this.length = length; // 个数
    this.currPos = currPos; // 当前的位置
    this.moveTo = moveTo; // 移动到某一个位置
    this.getElement = getElement; // 获取元素
    this.contains = contains; // 判断是否含有某一个值
}
```

> append(elem) 添加元素 

```javascript
function append(element) {
    this.dataStore[this.listSize++] = element;
}
```

> find(elem) 查找元素

如果找到了返回气索引、如果没有找到返回-1
```javascript
function find(element) {
    for(var i = 0; i< this.dataStore.length; i++) {
        if(this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
```
> remove(elem) 删除某一个元素

如果找到了并且删除成功返回true，否则返回false
```javascript
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
```

> length

```javascript
function length() {
    return this.listSize;
}
```

> toString 显示列表中元素

```javascript
function toString() {
    return this.dataStore;
}
```

> insert 列表中插入

```javascript
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
```
> clear 清空列表

```javascript
function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}
```

> contains 判断给定值是否存在于列表中

```javascript
function contains(element) {
    for(var i = 0; i< this.dataStore.length; i++) {
        if(this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}
```

> 遍历列表

```javascript
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
    return this.pos > 0;
}
```

> 访问列表

```javascript
// 从前往右
for(name.front(); name.hasNext(); name.next()) {
    console.log(name.getElement());
}
// 从右往左
for(name.end(); name.hasPrev(); name.prev()) {
    console.log(name.getElement());
}
```
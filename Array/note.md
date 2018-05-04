#### 数组

数组就是一串储存数据的线性集合。

**基本操作如下**

> 创建数组

```javascript
var arr = [];
var arr = [1,2,34];
var arr = new Array();
var arr = new Array('1','2');
var arr = new Array(10);
```

> 判断是否是数组

```javascript
Array.isArray(arr); 
```

> split()

```javascript
var str = "aaabbbcc";
str.split(''); // 字符串得到数组 
```

> 整体性操作

```javascript
arr1 = arr2; // 浅拷贝 只是添加了一个引用 罢了

// 深拷贝
function cppy(arr1, arr2) {
    for(var i = 0; i< arr1.length; i++) {
        arr2[i] = arr1[i];
    }
}
```

> indexOf()

```javascript
arr.indexOf("aaa"); // 查找索引，如果没有找到就返回-1
```

> lastIndexOf()

于`indexOf()`类似,只是返回的是最后一个元素的索引。

> join()

```javascript
str.join(); // 用逗号连接的字符串
str.join(''); // 直接连接

str.toString(); //效果同join()
```

> splice()

```javascript
arr = arr1.splice(2,3); // 从索引为2的位置出发，截取三个

// 原来的arr1的元素减少了
// 返回的新的arr是截取的那部分元素
```

> concat()

```javascript
arr1.concat(arr2); // 返回新的arr1

```
> push()

```javascript
arr.push();
```
> unshift()

```javascript
arr.unshift(); // 数组开头添加
```

> pop()

```javascript
arr.pop(); // 末尾删除一个
```

> 删除第一个元素

```javascript
arr.shift();
```


--------------------------------

* 重点难点

> splice()

* 1 中间位置添加

```javascript
arr.splice(2, 0, 4); // 2为起始索引、如果是添加就是0、4是要添加的元素为4
```

* 2 中间位置删除

```javascript
arr.splice(3,3); // 删除元素
```

> reverse() 倒序

```javascript
arr.reverse(); //
```

> sort()

```javascript
arr.sort(func()); // 从小到达
function func(a, b) {
    return a-b;
}
```

> forEach()


```javascript
// 遍历数组，不产生新的数组
arr.forEach(function(item) {
    console.log(item, item*item);
})

```

> every()

```javascript
var even = arr.every(func); // 如果全部都满足函数，则返回true 否则返回false
function func(item) {
    return item % 2 == 0;
}
```

> some()

```javascript
var even = arr.every(func); // 如果部分满足函数，则返回true 否则返回false
function func(item) {
    return item % 2 == 0;
}
```
> reduce()

```javascript
function func(total, current) {
    return total + current;
}
var num = [1,2,3,4,5];
var sum = num.reduce(func);
// 不断累加 结果为累加的和

```

----------------

**一下方法会返回新的数组哦**

> map

```javascript
function(num) {
    return num += 5;
}
var num = [1,2,3,4,5];
num.map(func);// 为每一个元素都增加5

```

> filter()

```javascript
function func(num) {
    return num >= 60;
}

var arr = [45,657,87,56];
arr.filter(func); // 返回筛选的元素
```


------------------

> 创建二维数组
 
```javascript
Array.Matrix = function(numrows, numcols, init) {
    var arr = [];
    for(var i = 0;i < numrows; i++){
        var columns = [];
        for(var j = 0 ; j < numcols, j++) {
            columns[j] = init;
        }
        arr[i] = columns;
    }
    return arr;
}
```

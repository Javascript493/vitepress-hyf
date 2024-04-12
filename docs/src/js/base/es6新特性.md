## let 和 const

ES6 新增了let和const 两个关键字的变量声明：
- let和const 都只在对应块级生效
- let是可以修改变量，而const不可修改

``` js
function fn () {
  let str = 'heyunfei'
  const num = 1
  console.log(str, 1) // heyunfei  1
}

console.log(str, 1) // undefined  undefined


```

```js
let str = 'heyunfei'
const number = 13

str = 'cold-heyunfei'
number = 12 // 是不被允许的操作
```

## 箭头函数
 **箭头函数**的语法比传统的函数表达式更为的简洁，但在用法上会有一定的限制:

  - 箭头函数没有独立的 `this` 、`arguments`、`super`
  - 箭头函数不能在其主体中使用 yield，也不能作为生成器函数创建。
  - 不可以使用new命令原因： 
    - 没有自己的this，无法调用call、apply，
    - 箭头函数没有prototype,无法绑定给实例的__proto__

  语义上：
  ```js
  // 普通函数
  function fn(a, b) {  reutn a + b }
  // 箭头函数
  const fn = (a, b) => a + b  // 当只有一条语句可省略{} 和 return
  ```

## 模板字符串
 通过``的方式进行引用，允许多行字符串、和插入变量

``` js
// 直接使用
`我是一个字符串`

// 多行
`我
是
一个字符串
`

// 插入变量
const name = 'heyunfei'
`My name is ${name}` // My name is heyunfei

// 需要对` 和 美元符号的转义 通过\

`\`` === '`' // true

`\${1}` === "${1}" //true
```

## 解构赋值

**解构赋值**，可以将数组中的值活对象的属性取出

``` js
let a, b, rest;
[a, b, ...rest] = [10, 20, 10, 20];

console.log(a,b, rest) // 10, 20 [10, 20]

const {a, b, ...rest} = {a: 'heyunfei', b: 'man', c: 18, d: '羽毛球'}
console.log(a, b, rest) // heyunfei man { c: 18, d: '羽毛球' }

```

 **格式的规则练习**

``` js

let a, b, rest;
[a, , b,d] = [10, 20, 30, 40];

console.log(a, b, d) // 10 30 40

// 补充默认值
[a, , b,d, e = 20] = [10, 20, 30, 40];

console.log(a, b, d, e) // 10 30 40 20

// 交换元素
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1


const [a, b, ...[c, d]] = [1, 2, 3, 4]
console.log(a, b, c, d); // 1 2 3 4
```

## 类和继承

### 类
类是用于创建对象的模板。它们用代码封装数据以对其进行处理。JS 中的类建立在原型之上，同时还具有一些类独有的语法和语义。

**定义类**
- 类表达式 
- 类声明

```js
// 类表达式
 const Student = class {
  constructor(name) {
    this.name = name
  }
 }
// 类表达式 命名
 const Student = class Student1 {
  constructor(name) {
    this.name = name
  }
 }
 /
 /

 // 类声明
 class Student {
  constructor(name) {
    this.name = name
  }
 }
```

- 类里面有一个constructor方法，它是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
- constructor方法中的this关键字代表实例对象
- 使用类的时候类似构造函数
- 类中的内部方法都定义在prototype这个对象上

``` js

class Student {
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log(`Hello, My name is ${this.name}`)
  }
 }
 var student = new Student('heyunfei')
 student.greet() //Hello, My name is heyunfei
```
### 继承
 `extends` 关键子用于类声明或表达式中， 用来创建一个类并作为这个构造函数（类）的子。


```js {7,8}
class Student {
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log(`Hello, My name is ${this.name}, detail: ${this.detail}`)
    // 这里的this.detail 在js中式允许这样写的，
    // 在子类实例中是可以访问的，而父类的子例是undefined
  }
 }

 class SmallStudent extends Student {
  constructor(name, detail) {
    super(name); // 调用父类的constructor
    this.detail = detail
  }
 }
 var student = new Student('heyunfei')

 var smallStudent = new SmallStudent('xiaohan', '小学生比较小')

 smallStudent.greet() // Hello, My name is xiaohan, detail: 小学生比较小
 ```

## 模块化
增加了模块的新引入方法
> 为了在脚本中直接执行所以后缀改成了mjs,这样的话node遇到后会识别成ES6模块。

**模块**（默认为module.mjs）
``` js
1. export default 'module'
2. export const name = 1
3. export const name =  1
   export default {
     sex: 1
   }
4. export const name =  1
   const defaultExport = '默认导出'
   export default defaultExport


```

**引入模块**
```js
1. import name from './module.mjs'
2. import name from './module.mjs' 
   import name as name1 from './module.mjs' // 将变量改为name1
3. import * as all from './module.mjs' // 引用全量的 { default: { sex: 1 }, name: 1 }
4. import defaultExport, { name } from './export.mjs' // default 优先要bi全局声明
    console.log(defaultExport)
```

## Promise

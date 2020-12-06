/**
 * 原型模式：
 * 将一个对象作为原型，通过对其进行复制而克隆出多个和原型类似的新实例。
 */
function Person () {
  this.name = 'zhang'
  this.sex = '25'
  this.age = '男'
  this.getName=function () {
    return `姓名:${this.name}`
  }
}
Person.prototype.getMsg = function () {
  return `姓名: ${this.name}, 年龄: ${this.age}, 性别:${this.sex}`
}

// new一个原型实例
const proto = new Person();
// 通过  Object.create 拷贝原型实例
const person1 = Object.create(proto);
const person2 = Object.create(proto);
person2.name = 'zhao'
person2.sex = '25'
person2.age = '女'
console.log(person1.getName())
console.log(person2.getName())
console.log(person1.getMsg())
console.log(person2.getMsg())
/**
 * 在 class 中实现一个clone方法，去深拷贝自己的本身，然后返回出去。
 * 外部调用class的实例中的clone方法，就能够拿到一个class的实例，但是
 */
class Man {
  constructor() {
    this.name = 'zhao'
    this.age = '25'
    this.getName = function () {
      return `姓名:${this.name}`
    }
  }
  clone(){
    // 深拷贝，同时 复制方法
    return {...JSON.parse(JSON.stringify(this)),getName: this.getName}
  }
}
let man = new Man()
let man2 = man.clone()
man2.name = 'zhang'
console.log(man)
console.log(man2.getName())

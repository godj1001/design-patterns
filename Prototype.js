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

const car = {
  init: function (name) {
    this.name = name
  },
  getCar: function () {
    return 'getCar'+ this.name
  }
}

const electricCar =function (name){
  function F() {}
  F.prototype = car
  const  f =new F()
  f.init(name)
  f.engine = 'Oil electric hybrid'
  return f
}
let myCar = new electricCar('BYD')
console.log(myCar.getCar())
console.log(myCar.engine)

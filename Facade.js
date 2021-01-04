/**
 * 外观模式
 * 是一种通过多个复杂的子系统提供了一个一致的接口，使这些子系统更容易的被访问的模式
 * 优点：
 * 降低了子系统与客户端之间的耦合度，使得子系统的变化不会影响调用它的客户类。
 对客户屏蔽了子系统组件，减少了客户处理的对象数目，并使得子系统使用起来更加容易。
 降低了大型软件系统中的编译依赖性，简化了系统在不同平台之间的移植过程，因为编译一个子系统不会影响其他的子系统，也不会影响外观对象。
  缺点：
 不能很好地限制客户使用子系统类，很容易带来未知风险。
 增加新的子系统可能需要修改外观类或客户端的源代码，违背了“开闭原则”。
 */
class Boss {
  constructor(name,secretary) {
    this.name = name
    this.secretary = secretary
  }
  meeting(){
    this.secretary.notify()
  }
}

class Secretary{
  constructor(departments) {
    this.departments = departments
  }
  notify(){
    this.departments.forEach(department => {
      department.accept()
      console.log('-----------')
    })
  }
}

class CustomerService{
  constructor(name) {
    this.name = name
  }
  accept(){
    console.log(this.name+'收到消息')
    console.log('客服经理去参加')
  }
}
class Sales{
  constructor(name) {
    this.name = name
  }
  accept(){
    console.log(this.name+'收到消息')
    console.log('销售主管去参加')
  }
}
class Operation{
  constructor(name) {
    this.name = name
  }
  accept(){
    console.log(this.name+'收到消息')
    console.log('首席运营去参加')
  }
}
let customerService = new CustomerService('客服部')
let sale = new Sales('销售部')
let operation = new Operation('运营部')
let secretary = new Secretary([customerService,sale,operation])
let xiaoMa = new Boss('xiao ma',secretary)
xiaoMa.meeting()


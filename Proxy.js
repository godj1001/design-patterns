/**
 * 代理模式:
 * 由于某些原因需要给某对象提供一个代理以控制对该对象的访问.
 * 还是买电脑这个场景，那么什么是代理模式呢。
 * 我看电脑销售人员太黑了，一个普通的显卡要价非常高，那么我问电脑销售人员，
 * 发货人的电话是多少,销售人员是不会告诉我的，但是比如我问发货人的年龄，他可以说的。
 */
class Salesman {
  constructor() {
    console.log('我是一个普普通通的电脑销售人员')
    this.source = new Source()
    this.whileList = ['age']
  }
  getInfo(info){
    if (this.whileList.includes(info)){
      return `你问的是${info},他的${info}是${this.source[info]}`
    }else {
      return '对不起，无可奉告'
    }
  }
}
class Source{
  constructor() {
    this.number = '13920000200'
    this.age = '30'
  }
  getNumber(){
    return this.number
  }
}
function askNumber() {
  let salesman = new Salesman()
  let result = salesman.getInfo('age')
  console.log(result)
  result = salesman.getInfo('number')
  console.log(result)
}

askNumber()

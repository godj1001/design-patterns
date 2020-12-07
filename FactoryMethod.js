/**
 * 工厂方法：
 * 定义一个用于创建产品的接口，由子类决定生产什么产品。
 */
/**
 * 工厂方法模式
 */
class Computer {
  createComputer(){}
}
class Cpu extends Computer{
  createComputer() {
    super.createComputer()
    console.log('生产cpu')
  }D
}
class Disk extends Computer{
  createComputer() {
    super.createComputer()
    console.log('生产disk')
  }
}
class ComputeFactory {
  getProduct(){}
}
class CpuFactory extends ComputeFactory{
  getProduct() {
    super.getProduct();
    return new Cpu()
  }
}
class DiskFactory extends ComputeFactory{
  getProduct() {
    super.getProduct();
    return new Disk()
  }
}

function product() {
  let cpuFactory = new CpuFactory()
  cpuFactory.getProduct().createComputer()
  console.log('===>')
  let diskFactory = new DiskFactory()
  diskFactory.getProduct().createComputer()
}

product()

/**
 * 简单工厂模式
 */

class Keyboard{
  constructor(props) {
     this.getProduct()
  }

  getProduct() {
    console.log('生产键盘')
  }
}

class Mouse {
  constructor(props) {
    this.getProduct()
  }
  getProduct ( ){
    console.log('生产鼠标')
  }
}

console.log('------------')
function PeripheralFactory(product) {
  let peripheralProduct = null
  if (product === 'keyboard'){
    peripheralProduct = new Keyboard()
  }else if (product === 'mouse'){
    peripheralProduct = new Mouse()
  }else {
    console.log('臣妾无能为力啊')
  }
  return peripheralProduct
}
PeripheralFactory('keyboard')
PeripheralFactory('mouse')
PeripheralFactory('screen')

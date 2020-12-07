/**
 * 建造者模式：
 * 指将一个复杂对象的构造与它的表示分离，使同样的构建过程可以创建不同的表示.
 * 建造者模式 是由 产品，抽象建造者，具体建造者，指挥者等4个要素构成.
 * 本例子 拿买电脑为例子；指挥者就是电脑销售人员。抽象建造者就是电脑基本组成（概念上的），具体建造者就是电脑具体组成，产品就是电脑了。
 * 指挥者根据一些条件判断，来生成不同的具体构建者。构建者最终产出就是一个产品。
 */
class Product{
  setCpu(cpu){
    this.cpu = cpu
  }
  setDisk(disk){
    this.disk = disk
  }
  setVideoCard(videoCard){
    this.videoCard = videoCard
  }
  show(){
    console.log(`您可以购买的产品属性为：cpu:${this.cpu}  硬盘：${this.disk}  显卡：${this.videoCard}`)
  }
}

class Builder {
  constructor() {
    this.product = new Product()
  }
  buildCpu(){}
  buildDisk(){}
  buildVideoCard(){}
  getResult(){
    return this.product
  }
}

class LowComputerBuild extends Builder{
  buildCpu() {
    super.buildCpu();
    console.log('cpu: i3')
    this.product.setCpu('i3')
  }
  buildDisk() {
    super.buildDisk();
    console.log('disk: 512G')
    this.product.setDisk('512G')
  }
  buildVideoCard() {
    super.buildVideoCard();
    console.log('video card: GTX980')
    this.product.setVideoCard('GTX980')
  }
}
class GoodComputerBuild extends Builder{
  buildCpu() {
    super.buildCpu();
    console.log('cpu: i9')
    this.product.setDisk('i9')
  }
  buildDisk() {
    super.buildDisk();
    console.log('disk: 2T')
    this.product.setDisk('2T')
  }
  buildVideoCard() {
    super.buildVideoCard();
    console.log('video card: GTX3070')
    this.product.setVideoCard('GTX3070')
  }
}

class Director{
  constructor(money) {
    console.log('电脑销售人员：你好，你的口袋里装了多少钱啊',`我：我口袋里面有${money}`)
    if (money<10000){
      console.log('电脑销售人员:穷鬼')
      this.builder = new LowComputerBuild()
    }else {
      console.log('电脑销售人员:有钱人呐')
      this.builder = new GoodComputerBuild()
    }
  }
  construct(){
    this.builder.buildCpu()
    this.builder.buildDisk()
    this.builder.buildVideoCard()
    return this.builder.getResult()
  }
}

function buyComputer() {
  console.log('I have $1000')
  let salesman = new Director(1000)
  let product =  salesman.construct()
  product.show()
  setTimeout(() => {
    console.log('after 2 years working ---> I have $10001 ')
    salesman = new Director(10001)
    product = salesman.construct()
    product.show()
  },2000)
}
buyComputer()

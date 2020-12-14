/**
 * 装饰模式：
 * 不改变现有对象结构的情况下，动态地给该对象增加一些职责的模式
 */
class Tank {
  display(){}
}

class NormalTank extends Tank{
  display() {
    super.display();
    console.log('a tank with',this.arms|| 'NoArms')
  }
  setArms(arms){
    this.arms = arms
  }
}

class Decorator extends Tank{
  constructor(tank) {
    super();
    this.tank = tank
  }
  display() {
    this.tank.display()
  }
}
// 重火炮
class HeavyArtillery extends Decorator{
  constructor(props) {
    super(props);
  }
  display() {
    this.setDecorator()
    super.display();
  }
  setDecorator(){
    this.tank.setArms('HeavyArtillery')
  }
}
// 轻机枪
class LightMachineGun extends Decorator{
  constructor(props) {
    super(props);
  }
  display() {
    this.setDecorator()
    super.display();
  }
  setDecorator(){
    this.tank.setArms('LightMachineGun')
  }
}
function decorateFn() {
  let tank = new NormalTank()
  tank.display()
  let heavyArtilleryTank = new HeavyArtillery(tank)
  heavyArtilleryTank.display()
  let lightMachineGun = new LightMachineGun(tank)
  lightMachineGun.display()
}
decorateFn()

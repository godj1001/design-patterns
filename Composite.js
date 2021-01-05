/**
 * 组合模式
 * 它是一种将对象组合成树状的层次结构的模式，用来表示“整体-部分”的关系，使用户对单个对象和组合对象具有一致的访问性
 */

class Furniture{
  show(){
    console.log('家具')
  }
}

class Sofa extends Furniture{
  show(){
    console.log('沙发')
  }
}

class BathroomFurniture extends Furniture{
  show(){
    console.log('沐浴家具')
  }
}

class Heater extends BathroomFurniture{
  display() {
    console.log('热水器')
  }
}

function goShopping() {
  let sofa = new Sofa()
  let heater = new Heater()
  sofa.show()
  heater.show()
  heater.display()
}

goShopping()

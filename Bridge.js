/**
 * 桥接模式：
 * 将抽象与实现分离，使它们可以独立变化
 * 模式的结构：
 * 桥接（Bridge）模式包含以下主要角色。
   抽象化（Abstraction）角色：定义抽象类，并包含一个对实现化对象的引用。
   扩展抽象化（Refined Abstraction）角色：是抽象化角色的子类，实现父类中的业务方法，并通过组合关系调用实现化角色中的业务方法。
   实现化（Implementor）角色：定义实现化角色的接口，供扩展抽象化角色调用。
   具体实现化（Concrete Implementor）角色：给出实现化角色接口的具体实现。
 */
const material = ['woodiness','iron']
class Material {
  getMaterial(){}
}
class Woodiness extends Material{
  getMaterial() {
    super.getMaterial();
    return 'Woodiness'
  }
}
class Iron extends Material{
  getMaterial() {
    super.getMaterial();
    return 'Iron'
  }
}

 class Table {
  setMaterial(material){
    this.material = material
  }
  getName(){}
}

class ComputerTable extends Table{
  getName() {
    super.getName();
    return this.material.getMaterial() + ' ComputerTable'
  }
}

class DiningTable extends Table{
  getName() {
    super.getName();
    return this.material.getMaterial() + ' DiningTable'
  }
}

function bridgeFn() {
  let table = new DiningTable()
  table.setMaterial(new Iron())
  console.log(table.getName())
  let computerTable = new ComputerTable()
  computerTable.setMaterial(new Woodiness())
  console.log(computerTable.getName())
}

bridgeFn()

/**
 * 适配器模式：
 * 将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的那些类能一起工作.
 * 终于从黑商手里买回来了电脑，拼装主机，连接电源，连接显示器，发现。。。我只有VGA接口，没有HDMI线。
 */
class Computer{
  constructor(line) {
    this.line = line
    this.screen = new Screen()
  }
  setLine(line){
    this.line = line
  }
  connect(){
    this.screen.connect(this.line.type)
  }
}
class Screen {
  constructor() {
    this.type = 'HDMI'
  }
  connect(type){
    if (type!==this.type){
      console.log('接口不匹配，无法连接')
    }else{
      console.log('当~当~当~当，显示屏连接正常')
    }
  }
}

class Line {
  constructor(adapter) {
    this.type = 'VGA'
    if (adapter){
      this.type = adapter.transform(this.type)
    }
  }
  setAdapter(adapter){
    this.type = adapter.transform(this.type)
  }
}

class Adapter{
  constructor(line) {
    this.line = line
  }
  transform(type){
    if (type === 'VGA'){
      return 'HDMI'
    }
  }
}

function construct() {
  let line = new Line()
  let computer = new Computer(line)
  computer.connect()
  console.log('=====接入适配器====')
  let adapter = new Adapter()
  line.setAdapter(adapter)
  computer.setLine(line)
  computer.connect()
}

construct()

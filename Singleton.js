/**
 * 单例模式 :
 * 某个类只能生成一个实例，该类提供了一个全局访问点供外部获取该实例，其拓展是有限多例模式.
 */

/**
 * 使用class静态属性实现单例
 */
class Earth {
  static instance
  constructor(data) {
    if (Earth.instance){
      return Earth.instance
    }else {
      Earth.instance = this
    }
    this.data = data
  }
}
let earthOne = new Earth('地球')
let earthTwe = new Earth('Earth')

console.log(earthOne === earthTwe) // true
console.log(earthOne,earthTwe)

/**
 * 高阶函数 使用闭包来实现静态变量
 */
function getSingle(fn){
  let instance;
  return function(...args){
    if(!instance){
      instance = new fn(...args);
    }
    return instance;
  }
}
let earthThree = getSingle(Earth)('Earth')
console.log(earthTwe === earthThree) // true

/**
 * audio
 */
class Audio {
  static instance
  constructor() {
    if (Audio.instance){
      return Audio.instance
    }else {
      this.src = ''
      this.isPlaying = false
      Audio.instance = this
    }
  }

  start(src){
    this.src = src
    this.isPlaying = true
    // ....
  }

  pause(){
    this.isPlaying = false
  }
  stop(){
    this.src = ''
    this.isPlaying = false
  }
}
let audioOne = new Audio()
let audioTwe = new Audio()
console.log(audioOne === audioTwe)

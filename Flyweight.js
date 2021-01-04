/**
 * 享元模式
 * 运用共享技术来有效地支持大量细粒度对象的复用
 */
class DataBase{
  constructor(){
    this.connectUserList = new Array(3).fill(new Link())
    console.log(this.connectUserList)
  }

  connect(user){
    let link = this.connectUserList.find(link => {
      return !link.status
    })
    if (!link) {
      console.log('链接已满')
      return
    }
    link.openStatus()
    link.setUser(user)
    console.log('链接成功')
  }

  breakConnect(userInfo){
    const link = this.connectUserList.find(link => {
      return link.user.id === userInfo.id
    })
    link.closeStatus()
    link.removeUser()
    console.log('断开链接')

  }
}

class User {
  constructor() {
    this.id = new Date().getTime()
  }
}

class Link {
   status= false
  constructor() {
    this.user = null
  }
  openStatus(){
     this.status= true
  }
  closeStatus(){
     this.status = false
  }
  setUser(user){
    this.user = user
  }
  removeUser(user){
    this.user= null
  }
}

function useDB() {
  let database = new DataBase()
  let userOne = new User()
  let userTwe = new User()
  let userThree = new User()
  let userFour = new User()
  database.connect(userOne)
  database.connect(userTwe)
  database.connect(userThree)
  database.connect(userFour)

  database.breakConnect(userOne)
  database.connect(userFour)
}

useDB()

// class Human {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
// ageOneYear() {
//   return this.age++
// }
//
// eating(str) {
//   return "mmm, mmm, mmm, I\'m love\'n it"
// }
// }
//
// let jrJ = new Human("Jung Rae Jang", 28)
// console.log(jrJ.age)
// console.log(jrJ.ageOneYear())
// console.log(jrJ.age)
// console.log(jrJ.eating("Tortas"))
////////////////////////////////////////////////////

class Vector {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

plus(vector) {
  let vectorxsum = this.x + vector.x
  let vectorysum = this.y + vector.y
  return new Vector(vectorxsum, vectorysum)
}

minus(vector) {
  let vectorxminus = this.x - vector.x
  let vectoryminus = this.y - vector.y
  return new Vector(vectorxminus, vectoryminus)
}

getLength() {
  let vectorlength = Math.pow(this.x, 2) + Math.pow(this.y, 2)
  return Math.sqrt(vectorlength)
}

getLengthBetween(vector) {
  let v1XCon = Math.sqrt(this.x * this.x)
  let v1YCon = Math.sqrt(this.y * this.y)
  let v2XCon = Math.sqrt(vector.x * vector.x)
  let v2YCon = Math.sqrt(vector.y * vector.y)
  let vectorDistance = Math.pow((v1XCon + v2XCon), 2) + Math.pow((v1YCon + v2YCon), 2)
  return Math.sqrt(vectorDistance)
}

}
let v1 = new Vector(0, 0)
let v2 = new Vector(3, 4)
let v3 = new Vector(5, 7)
let v4 = new Vector(-5, -7)
console.log(v1.minus(v2))
console.log(v3.getLength())
console.log(v2.getLengthBetween(v4))

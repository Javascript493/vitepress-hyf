function _New(_constructor, ...args) {
  var obj = {}
  obj.__proto__ = _constructor.prototype
  const resObj = _constructor.call(obj, ...args)
  return resObj instanceof Object ? resObj : obj
}

function Student(name, sex) {
  this.name = name
  this.sex = sex
}

const a = _New(Student, 'heyunfe', '男')

console.log(a, '-')
console.log(a.__proto__, '-')
console.log(Student.prototype, '-')
console.log(a.__proto__ == Student.prototype, '-')
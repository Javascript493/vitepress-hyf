
class Student {
  constructor(name) {
    this.name = name
  }
  age = 1
  greet() {

    console.log(this, `Hello, My name is ${this.name}, detail: ${this.detail}`)
  }
 }

 class SmallStudent extends Student {
  constructor(name, detail) {
    super(name); // 调用父类的constructor
    this.detail = detail
  }
 }
 var student = new Student('heyunfei')

 var smallStudent = new SmallStudent('xiaohan', '小学生比较小')

 smallStudent.greet()

 student.greet()
 console.log(student)
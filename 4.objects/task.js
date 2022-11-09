function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let firstStudent = new Student("Anton", "male", 23);
let seconStudent = new Student("Ivan", "male", 28);

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов

Student.prototype.addMark = function (mark) {
  if ( this.marks === undefined) {
  this.marks = [mark]; 
  } else {
  this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if ( this.marks === undefined) {
    this.marks = [...mark]; 
    } else {
    this.marks.push(...mark);
    }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
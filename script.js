// class Person {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }

//   fullname(first, last) {
//     console.log(first + last, this.firstName + this.lastName);
//   }
// }

// class NewClass extends Person {
//   render() {
//     this.fullname("Mohammed ", "obaid");
//   }
//   firstName = "Mohammed";
//   lastName = "obaid";
//   title = 10;
//   display(first, last) {
//     const fullname = new Person("Mohammed ", "obaid");
//     fullname.fullname(first, last);
//   }
// }

// const example = new NewClass();
// example.display("mohammed ", "salman");
// example.render();

// const date = new Date();
// console.log(date.getFullYear());

// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }
// Person.prototype.city = "Hyderabad";

// var myName = new Person("Mohammed ", "obaid", "20");
// console.log(myName.city);

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   fullname() {
//     console.log(
//       `My name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`
//     );
//   }
// }

// class Teacher extends Person {
//   constructor(firstName, lastName, age, subject, classes) {
//     super(firstName, lastName, age);
//     this.subject = subject;
//     this.classes = classes;
//   }
// }

// const t = new Teacher("Mohammed ", "obaid", 20);

// t.fullname();

class DateFormatter extends Date {

  getFormattedDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }

}

console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
// expected output: "19-Aug-1975"
// OOP section

// define
// let person = {};
// let user = new Object();

// property
// user.name = "Gregory";
// person.age = 20;
// get property
// console.log(user.name);
// console.log(user["name"]);
// console.log(person.age);

// function outer(a, b) {
//   console.log(arguments);
//   console.log(a + b);
// }

// outer(10, 20);

function foo() {
  console.log(this.bar);
}

var obj = { bar: "obj_bar" };
var bar = "global_bar";
foo(); // global_bar

// Позволяет вызывать функцию с конкретной областью видимости
// но не создавать
foo.apply(obj); // obj_bar

// Позволяет создание функции с конкретной областью видимости
let func = foo.bind(obj);
func();

// или
// foo.call(obj);

// const person = {
//   name: "Tom",
//   say: () => console.log(`Меня зовут ${person.name}`),
// };
// person.say(); // Меня зовут

// const person = {
//   name: "Tom",
//   hello() {
//     console.log("Привет");
//     let say = () => console.log(`Меня зовут ${this.name}`);
//     say();
//   },
// };
// person.hello();

// const school = {
//   title: "Oxford",
//   courses: ["JavaScript", "TypeScript", "Java", "Go"],
//   printCourses() {
//     // Сохранение ссылки на контекст
//     const that = this;

//     // this.courses -> имеет свой контекст
//     this.courses.forEach(function (course) {
//       console.log(that.title, course);
//     });

//     // контекст printCourses, обьекта school.
//     console.log(this.title);
//   },
// };
// school.printCourses();

// решение проблемы с передачей контекста
// const school = {
//   title: "Oxford",
//   courses: ["JavaScript", "TypeScript", "Java", "Go"],
//   printCourses() {
//     this.courses.forEach((course) => console.log(this.title, course));
//   },
// };
// school.printCourses();

// const toms = { name: "Tom", age: 37 };
// const bob = Object.assign({}, toms);
// bob.name = "Bob";
// bob.age = 41;

// console.log(`Объект tom. Name: ${toms.name}   Age: ${toms.age}`);
// console.log(`Объект bob. Name: ${bob.name}   Age: ${bob.age}`);

// const tom = { name: "Tom" };
// const sam = { age: 37 };
// const person = { height: 170 };
// Object.assign(person, tom, sam); // копируем из tom и sam в person
// console.log(person); // {height: 170, name: "Tom", age: 37}


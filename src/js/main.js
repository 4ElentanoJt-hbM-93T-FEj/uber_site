// alert("hello world");

function outer() {
  console.log(arguments);
  let x = 5;
  //   function inner() {
  //     x++;
  //     console.log(x);
  //   }
  return () => {
    x++;
    console.log(x);
  };
}

// const fn = outer(); // fn = inner, так как функция outer возвращает функцию inner
// вызываем внутреннюю функцию inner
// fn(); // 6
// fn(); // 7
// fn(); // 8

// person = {
//   name: "GREG",
//   age: 10,
// };

// console.log(person.age);

// ((num) => {
//   console.log(`IIFE = ${num}`);
// })(100);

// console.log(
//   ((x, y) =>
//     ((proc2) => ((proc1) => proc1(5, 30))((x, y) => [x, proc2(), y]))(
//       () => x + y
//     ))(10, 15)
// );
let number = 10;
function print() {
  number = -10;
  console.log(number);
  console.log("Доброе утро");
  print = function () {
    console.log("Добрый день");
  };
}

// присвоение ссылки на функцию до переопределения
const printMessage = print;
print(); // Доброе утро
print(); // Добрый день
printMessage(); // Доброе утро
printMessage(); // Доброе утро

let name = "10";

globalThis.alert("Hello world");


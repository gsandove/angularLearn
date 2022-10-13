// var message = "Hoisting";
// console.log(message);
// El hoisting se aplica para var y las funciones declarativas, no aplica a let ni const ni arrow function
// var objeto = "Objeto VAR";
// function objeto() {
//   return "Objeto FUN";
// }

console.log(f1());

function f1() {
  return f2();
}

function f2() {
  return 2 + 2;
}

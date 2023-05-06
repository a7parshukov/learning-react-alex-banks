// var topic = "JavaScript";
// if(topic) {
//   var topic = "React";
//   console.log(`block ${topic}`); // block React
// }
// console.log(`global ${topic}`); // global React


// var topic = "JavaScript";
// if(topic) {
//   let topic = "React";
//   console.log(`block ${topic}`); // block React
// }
// console.log(`global ${topic}`); // global JavaScript


// Объявление функции:
// logCompliment();
// function logCompliment() {
//   console.log("Hello");
// }
// logCompliment();


// Объявление функционального выражения:
// logCompliment(); // ReferenceError: Cannot access 'logCompliment' before initialization
const logCompliment = function() {
  console.log("Hello");
}
logCompliment();
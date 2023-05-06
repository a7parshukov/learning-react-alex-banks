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
// const logCompliment = function() {
//   console.log("Hello");
// }
// logCompliment();


// Стрелочная функция:
// const logHello = () => console.log("Hello");
// logHello();


// function logHello(name="Monk", text="I`m blind.") {
//   return `Hello ${name}, is VSCode, ${text}`
// }
// console.log(logHello("John", "how are you?"));


// const person = (firstName, lastName) => ({
//   first: firstName,
//   last: lastName
// })
// console.log(person("Brad", "Janson"));

// const tahoe = {
//   mountains: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
//   print: function(delay=1000) {
//     setTimeout(function() {
//       console.log(this.mountains.join(","));
//     }, delay);
//   }
// }
// tahoe.print(); // TypeError: Cannot read properties of undefined (reading 'join')
// console.log(this) // Window {}

// const tahoe = {
//   mountains: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
//   print: function(delay=1000) {
//     setTimeout(() => {
//       console.log(this.mountains.join(", "));
//     }, delay);
//   }
// }
// tahoe.print(); // Kirkwood, Squaw, Alpine, Heavenly, Northstar
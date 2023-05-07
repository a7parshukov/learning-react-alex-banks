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

// иной вариант:
// const tahoe = {
//   resorts: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
//   print: function (delay = 1000) {
//     setTimeout(function () {
//       console.log(this.resorts.join(", "))
//     }.bind(this), delay)

//   }
// }
// tahoe.print()


// const obj = {
//   num: 2
// }
// function addOne(a) {
//   return this.num + a
// }
// console.log(addOne.call(obj, 5));
// function addMany(a, b, c) {
//   return this.num + a + b + c;
// }
// console.log(addMany.call(obj, 1, 2, 3))


// const obj = {
//   num: 2
// }
// function add(a, b, c) {
//   return this.num + a + b + c;
// }
// console.log(add.apply(obj, [1, 2, 3]));

// const obj = {
//   num: 2
// }

// function add(a, b) {
//   return this.num + a + b;
// }

// console.log(add.bind(obj, 1, 2)); // результата не будет - [Function: bound add]
// const newAdd = add.bind(obj, 1, 2);
// console.log(newAdd()); // 5 - bind возвращает функцию. Её надо вызвать!

// function Item(name, price) {
//   this.name = name,
//   this.price = price,
//   this.description = `This is ${this.name}, price ${this.price}`
// }
// function Car(name, price) {
//   Item.call(this, name, price)
// }
// function Fruit(name, price) {
//   Item.call(this, name, price)
// }
// const bmw = new Car("BMW", 10000);
// console.log(bmw.description); // This is BMW, price 10000
// const banana = new Fruit("Banana", 10);
// console.log(banana.description); // This is Banana, price 10


// const queue = [
//   { name: "Matt" },
//   { name: "Jack" }
// ];

// for (let i = 0; i < queue.length; i++) {
//   (function(i) {
//     this.displayInfo = function() {
//       console.log(`Position ${i}: ${this.name}`);
//     }
//     this.displayInfo();
//   }).call(queue[i], i);
// }


// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// num1.push.apply(num1, num2);
// console.log(num1); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(num2); // [4, 5, 6]
// const newNum = num1.concat(num2);
// console.log(newNum);

// let person = {
//   name: "Jhon",
//   getName: function() {
//     console.log(this.name);
//   }
// }
// globalThis.setTimeout(person.getName, 1000); // undefined
// let func = person.getName.bind(person);
// setTimeout(func, 1000); // Jhon

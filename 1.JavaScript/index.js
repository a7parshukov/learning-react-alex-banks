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

// let user = {
//   firstName: "Mike",
//   sayHi() {
//     console.log(`Привет ${this.firstName}`);
//   }
// };
// setTimeout(user.sayHi, 1000); // Привет undefined
// setTimeout(user.sayHi(), 1000); // Привет Mike. Но - TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received undefined

// let user = {
//   firstName: "Mike",
//   sayHi() {
//     console.log(`Привет ${this.firstName}`);
//   }
// };
// setTimeout(() => user.sayHi(), 1000) // 
// user.sayHi = function() {
//   console.log("Изменили значение")
// }
// // Итого: Изменили значение


// let user = {
//   firstName: "Mike",
//   sayHi() {
//     console.log(`Привет ${this.firstName}`);
//   }
// };
// let funcUser = user.sayHi.bind(user);
// setTimeout(funcUser, 1000); // Привет Mike

// let user = {
//   firstName: "Mike",
// }

// function sayHi() {
//   console.log(`Hello ${this.firstName}`)
// }

// let funcUser = sayHi.bind(user);
// setTimeout(funcUser, 1000); // Привет Mike


// const sandwich = {
//   bread: "dutch crunch",
//   meat: "tuna",
//   cheese: "swiss",
//   toppings: ["lettuce", "tomato", "mustard"]
// }

// let { bread, meat } = sandwich;
// console.log(bread); // dutch crunch
// console.log(meat); // tuna

// bread = "new bread";
// meat = "new meat";
// console.log(bread); // new bread
// console.log(meat); // new meat
// console.log(sandwich);
// /*
// {
//   bread: 'dutch crunch',
//   meat: 'tuna',
//   cheese: 'swiss',
//   toppings: [ 'lettuce', 'tomato', 'mustard' ]
// }
// */

// const lordify = regularPerson => {
//   console.log(`${regularPerson.firstName} of Canterbury`);
// }

// const regularPerson = {
//   firstName: "Bill",
//   lastName: "Wilson"
// }

// lordify(regularPerson); // Bill of Canterbury


// const lordify = ({ firstName }) => {
//   console.log(`${firstName} of Canterbury`);
// }

// const regularPerson = {
//   firstName: "Bill",
//   lastName: "Wilson"
// }

// lordify(regularPerson); // Bill of Canterbury


// const regularPerson = {
//   firstName: "Bill",
//   lastName: "Wilson",
//   spouse: {
//     firstName: "Phil",
//     lastName: "Wilson"
//   }
// }

// const lordify = ({ spouse: { firstName } }) => {
//   console.log(`${firstName} of Canterbury`);
// }

// lordify(regularPerson); // Phil of Canterbury



// const [firstAnimal] = ["Horse", "Mouse", "Cat"];
// console.log(firstAnimal); // Horse

// const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];
// console.log(thirdAnimal); // Cat

// const name = "Tallac";
// const elevation = 9738;
// const print = function() {
//   console.log(`Mt. ${this.name} is ${this.elevation} feet tall.`)
// }
// const funHike = { name, elevation, print }
// funHike.print(); // Mt. Tallac is 9738 feet tall.

// const peaks = ["Tallac", "Ralston", "Rose"]
// const canyons = ["Ward", "Blackwood"]
// const newArr = [...peaks, ...canyons]
// console.log(newArr); // [ 'Tallac', 'Ralston', 'Rose', 'Ward', 'Blackwood' ]

// const [lastElem] = newArr.toReversed(); 
// console.log(lastElem); // Blackwood
// console.log(newArr); // [ 'Tallac', 'Ralston', 'Rose', 'Ward', 'Blackwood' ] - метод toReversed() не изменяет оригинальный массив

// const array = ["Tallac", "Ralston", "Rose", "Ward", "Blackwood"];
// const [lastElem] = [...array].reverse();
// console.log(lastElem); // Blackwood
// console.log(array); // [ 'Tallac', 'Ralston', 'Rose', 'Ward', 'Blackwood' ] - метод reverse() меняет оригинальный массив. Но в данном случае этого не произошло.


// const array = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
// const [first, ...others] = array;

// console.log(array); // [ 'Donner', 'Marlette', 'Fallen Leaf', 'Cascade' ]
// console.log(first); // Donner
// console.log(others); // [ 'Marlette', 'Fallen Leaf', 'Cascade' ]


// function directions(...args) {
//   const [start, ...remaining] = args
//   const [finish, ...stops] = remaining.reverse()

//   console.log(`drive through ${args.length} towns`)
//   console.log(`start in ${start}`)
//   console.log(`the destination is ${finish}`)
//   console.log(`stopping ${stops.length} times in between`)
// }

// directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma")

// const morning = {
//   breakfast: "oatmeal",
//   lunch: "peanut butter and jelly"
// }
// const dinner = "mac and cheese"

// const newObj = {
//   ...morning,
//   dinner
// }
// console.log(newObj);
/* {
  breakfast: 'oatmeal',
  lunch: 'peanut butter and jelly',
  dinner: 'mac and cheese'
}
*/


// function Vacation(destination, length) {
//   this.destination = destination;
//   this.length = length;
// };
// Vacation.prototype.print = function() {
//   console.log(`${this.destination} | ${this.length} days`)
// };
// const maui = new Vacation("Maui", 7);
// maui.print(); // Maui | 7 days

class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(`${this.destination} | ${this.length} days`)
  }
}

const maui = new Vacation("Maui", 7);
maui.print(); // Maui | 7 days

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}
const trip = new Expedition("Mt. Whitney", 3, [
  "sunglasses",
  "prayer flags",
  "camera"
]);
trip.print();
/*
Mt. Whitney | 3 days
Bring your sunglasses and your prayer flags and your camera
*/
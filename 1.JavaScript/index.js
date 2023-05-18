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

// class Vacation {
//   constructor(destination, length) {
//     this.destination = destination;
//     this.length = length;
//   }
//   print() {
//     console.log(`${this.destination} | ${this.length} days`)
//   }
// }

// const maui = new Vacation("Maui", 7);
// maui.print(); // Maui | 7 days

// class Expedition extends Vacation {
//   constructor(destination, length, gear) {
//     super(destination, length);
//     this.gear = gear;
//   }
//   print() {
//     super.print();
//     console.log(`Bring your ${this.gear.join(" and your ")}`);
//   }
// }
// const trip = new Expedition("Mt. Whitney", 3, [
//   "sunglasses",
//   "prayer flags",
//   "camera"
// ]);
// trip.print();
/*
Mt. Whitney | 3 days
Bring your sunglasses and your prayer flags and your camera
*/


// const log = function(message) {
//   console.log(message)
// }
// log("Hello"); // Hello

// const logArrow = message => console.log(message);
// logArrow("Hello"); // Hello

// const logArrow = message => console.log(message);
// const object = {
//   message: "Hello, this is object",
//   log(message) {
//     console.log(message)
//   }
// }
// object.log("Hello out"); // Hello out
// object.log(object.message); // Hello, this is object


// const messages = [
//   "Hello 123",
//   message => console.log(message),
//   "Hello 321",
//   message => console.log(message),
// ]
// messages[1](messages[0]); // Hello 123
// messages[1](messages[2]); // Hello 321

// const insideFunc = logger => {
//   logger("Я внутри функции")
// }
// insideFunc(message => console.log(message)); //Я внутри функции


// const createScream = function(logger) {
//   return function(message) {
//     logger(message.toUpperCase() + "!!!")
//   }
// }
// const scream = createScream(message => console.log(message));
// scream("hello my friend") // HELLO MY FRIEND!!!
// console.log(scream);


// Пример императивного подхода:
// const string = "Restaurants in Hanalei";
// let url = "";

// for (let i = 0; i < string.length; i++) {
//   if(string[i] === " ") {
//     url += "-"
//   } else {
//     url += string[i]
//   }
// }

// console.log(url); // Restaurants-in-Hanalei

// Пример декларативного подхода:
// const string = "Restaurants in Hanalei";
// let url = string.replace(/ /g, "-");
// console.log(url); // Restaurants-in-Hanalei

// const color_lawn = {
//   title: "lawn",
//   color: "#00FF00",
//   rating: 0
// }
// function rateColor(color, rating) {
//   color.rating = rating;
//   return color;
// }
// console.log(rateColor(color_lawn, 5)); // { title: 'lawn', color: '#00FF00', rating: 5 }
// console.log(color_lawn); // { title: 'lawn', color: '#00FF00', rating: 5 }

// let color_lawn = {
//   title: "lawn",
//   color: "#00FF00",
//   rating: 0
// }
// // const rateColor = function (color, rating) {
// //   return Object.assign({}, color, { rating: rating })
// // }
// const rateColor = (color, rating) => ({
//   ...color,
//   rating: rating
// })
// console.log(rateColor(color_lawn, 5)); // { title: 'lawn', color: '#00FF00', rating: 5 }
// console.log(color_lawn); // { title: 'lawn', color: '#00FF00', rating: 0 }

// let list = [
//   { title: "Rad Red" },
//   { title: "Lawn" },
//   { title: "Party Pink" }
// ]
// const addColor = function(title, colors) {
//   colors.push({title: title});
//   return colors;
// }
// console.log(addColor("Green", list));
// console.log(list);
// /* в обоих случаях
// [
//   { title: 'Rad Red' },
//   { title: 'Lawn' },
//   { title: 'Party Pink' },
//   { title: 'Green' }
// ]
// Массив изменен.
// */
// // изменяем функцию addColor:
// const addColor = (title, array) => array.concat({ title })
// console.log(addColor("Green", list));
// /*
// [
//   { title: 'Rad Red' },
//   { title: 'Lawn' },
//   { title: 'Party Pink' },
//   { title: 'Green' }
// ]
// */
// console.log(list); // [ { title: 'Rad Red' }, { title: 'Lawn' }, { title: 'Party Pink' } ] == оригинал не изменен.
// // можно использовать другой вариант:
// const addColor = (title, array) => [...array, { title }];
// console.log(addColor("Green", list));
// console.log(list);
// // аналогично - оригинальный массив не был изменен.


// const frederick = {
//   name: "Frederick Douglass",
//   canRead: false,
//   canWrite: false
// }

// function selfEducate() {
//   frederick.canRead = true
//   frederick.canWrite = true
// }

// selfEducate();
// console.log(frederick); // { name: 'Frederick Douglass', canRead: true, canWrite: true }

// const  frederick = {
//   name: "Frederick Douglass",
//   canRead: false,
//   canWrite: false
// }

// const selfEducate = person => ({
//   ...person,
//   canRead: true,
//   canWrite: true
// })

// console.log(selfEducate(frederick)); // { name: 'Frederick Douglass', canRead: true, canWrite: true }
// console.log(frederick); // { name: 'Frederick Douglass', canRead: false, canWrite: false }


// const schools = [
//   "Yorktown",
//   "Washington & Lee",
//   "Wakefield"
// ]

// const string = schools.join(", ");
// console.log(string); // Yorktown, Washington & Lee, Wakefield

// const wSchools = schools.filter(school => school[0] === "W");
// console.log(wSchools); // [ 'Washington & Lee', 'Wakefield' ]

// const cutSchool = (cut, school) => school.filter(s => s !== cut);
// console.log(cutSchool("Yorktown", schools)); // [ 'Washington & Lee', 'Wakefield' ]
// console.log(schools); // [ 'Yorktown', 'Washington & Lee', 'Wakefield' ]

// const highSchool = schools.map(elem => `${elem} High School`);
// console.log(highSchool);
/*
[
  'Yorktown High School',
  'Washington & Lee High School',
  'Wakefield High School'
]
*/
// console.log(schools); // [ 'Yorktown', 'Washington & Lee', 'Wakefield' ]

// const objSchool = schools.map(elem => ({ name: elem }));
// console.log(objSchool);
/*
[
  { name: 'Yorktown' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' }
]
*/

// const schools = [
//   { name: 'Yorktown' },
//   { name: 'Stratford' },
//   { name: 'Washington & Lee' },
//   { name: 'Wakefield' }
// ]
// const editName = (oldName, newName, array) =>
//   array.map(elem => {
//     if (elem.name === oldName) {
//       return {
//         ...elem,
//         name: newName
//       }
//     } else {
//       return elem
//     }
//   })

// const editName = (oldName, newName, array) => 
//   array.map(elem => (elem.name === oldName) ? { ...elem, name: newName } : elem)

// const newSchools = editName("Stratford", "Woodlawn", schools);
// console.log(newSchools);
/*
[
  { name: 'Yorktown' },
  { name: 'Woodlawn' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' }
]
*/
// console.log(schools);
/*
[
  { name: 'Yorktown' },
  { name: 'Stratford' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' }
]
*/



// const schoolsObj = {
//   "Yorktown": 10,
//   "Washington & Lee": 2,
//   "Wakefield": 5
// }

// const schoolsArr = Object.keys(schoolsObj).map(elem => ({
//   name: elem,
//   wins: schoolsObj[elem]
// }));
// console.log(schoolsArr);
/*
[
  { name: 'Yorktown', wins: 10 },
  { name: 'Washington & Lee', wins: 2 },
  { name: 'Wakefield', wins: 5 }
]
*/


// const ages = [21, 18, 42, 40, 64, 63, 34];

// const sumAges = ages.reduce((sum, current) => sum + current, 0);
// console.log(sumAges); // 282 - сумма чисел.

// const maxAges = ages.reduce((max, age) => {
//   console.log(`${age} > ${max} = ${age > max} `);
//   if(age > max) {
//     return age;
//   } else {
//     return max;
//   }
// }, 0)
/*
21 > 0 = true 
18 > 21 = false 
42 > 21 = true 
40 > 42 = false 
64 > 42 = true 
63 > 64 = false 
34 > 64 = false 
*/

// const maxAges = ages.reduce((max, age) => ((age > max) ? age : max), 0);
// console.log(maxAges); //64


// const colors = [
//   {
//     id: '-xekare',
//     title: "rad red",
//     rating: 3
//   },
//   {
//     id: '-jbwsof',
//     title: "big blue",
//     rating: 2
//   },
//   {
//     id: '-prigbj',
//     title: "grizzly grey",
//     rating: 5
//   },
//   {
//     id: '-ryhbhsl',
//     title: "banana",
//     rating: 1
//   }
// ]

// const hashColors = colors.reduce((hash, {id, title, rating}) => {
//   hash[id] = {
//     title,
//     rating
//   }
//   return hash;
// }, {})
// console.log(hashColors);
/*
{
  '-xekare': { title: 'rad red', rating: 3 },
  '-jbwsof': { title: 'big blue', rating: 2 },
  '-prigbj': { title: 'grizzly grey', rating: 5 },
  '-ryhbhsl': { title: 'banana', rating: 1 }
}
*/


// const colors = ["red", "red", "green", "blue", "green"];

// const uniqueColors = colors.reduce(
//   (unique, color) => 
//     unique.indexOf(color) !== -1 ? unique : [...unique, color], []
// )
// console.log(uniqueColors); // [ 'red', 'green', 'blue' ]




// const showWelcome = () => console.log("Welcome!");
// const showUnauthorized = () => console.log("Unauthorized...");
// const invokeIf = (condition, funcTrue, funcFalse) => {
//   condition ? funcTrue() : funcFalse()
// }

// invokeIf(true, showWelcome, showUnauthorized); // Welcome!
// invokeIf(false, showWelcome, showUnauthorized); // Unauthorized...


// const countdown = (value, func) => {
//   func(value);
//   return value > 0 ? countdown(value - 1, func) : value
// }
// countdown(10, value => console.log(value)); // 10...0

// const countdown = (value, func, delay = 1000) => {
//   func(value);
//   return value > 0 ? setTimeout(() => countdown(value - 1, func, delay), delay) : value
// }
// countdown(10, value => console.log(value)); // 10...0


// const dan = {
//   type: "person",
//   data: {
//     gender: "male",
//     info: {
//       id: 22,
//       fullname: {
//         first: "Dan",
//         last: "Deacon"
//       }
//     }
//   }
// }

// const deepPick = (fields, object = {}) => {
//   const [first, ...remaining] = fields.split(".")
//   return remaining.length ? deepPick(remaining.join("."), object[first]) : object[first]
// };
// console.log(deepPick("data.info.fullname.first", dan))


// const template = "hh:mm:ss tt";
// const clockTime = template
//   .replace("hh", "03")
//   .replace("mm", "33")
//   .replace("ss", "33")
//   .replace("tt", "PM")
// console.log(clockTime); // 03:33:33 PM

// const createClockTime = date => ({date})

// const appendAMPM = ({date}) => ({
//   date,
//   ampm: (date.getHours() >= 12) ? "PM" : "AM"
// })

// const civilianHours = clockTime => {
//   const hours = clockTime.date.getHours();
//   return {
//     ...clockTime,
//     hours: (hours > 12) ? hours - 12 : hours
//   }
// }

// const removeDate = clockTime => {
//   let newTime = {...clockTime};
//   delete newTime.date;
//   return newTime
// }

// const step1 = createClockTime(new Date());
// console.log(step1);
// const step2 = appendAMPM(step1);
// console.log(step2);
// const step3 = civilianHours(step2);
// console.log(step3);
// const step4 = removeDate(step3);
// console.log(step4);
/*
Результаты console.log:
{ date: 2023-05-14T11:38:57.169Z }
{ date: 2023-05-14T11:38:57.169Z, ampm: 'PM' }
{ date: 2023-05-14T11:38:57.169Z, ampm: 'PM', hours: 2 }
{ ampm: 'PM', hours: 2 }
*/

// const compose = (...functions) => 
//   (argument) => 
//     functions.reduce(
//       (composed, func) => func(composed), argument
//     )

// const oneFunc = compose(
//   createClockTime,
//   appendAMPM,
//   civilianHours,
//   removeDate
// )

// console.log(oneFunc(new Date())); // { ampm: 'PM', hours: 2 }


// Часы
// setInterval(logClockTime, 1000);

// function logClockTime() {
//   let time = getClockTime();
//   console.clear();
//   console.log(time);
// }

// function getClockTime() {
//   let date = new Date();

//   let time = {
//     hours: date.getHours(),
    // minutes: date.getMinutes(),
    // seconds: date.getSeconds(),
    // ampm: "",
//   }

//   if (time.hours == 12) {
//     time.ampm = "PM";
//   } else if (time.hours > 12) {
//     time.ampm = "PM";
//     time.hours -= 12;
//   }

//   if (time.hours < 10) {
//     time.hours = `0${time.hours}`
//   }

//   if (time.minutes < 10) {
//     time.minutes = `0${time.minutes}`
//   }

//   if (time.seconds < 10) {
//     time.seconds = `0${time.seconds}`
//   }

//   return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`
// }


// const oneSecond = () => 1000;
// const getCurrentTime = () => new Date();
// const clear = () => console.clear();
// const log = message => console.log(message);

// const serializeClockTime = date => ({
//   hours: date.getHours(),
//   minutes: date.getMinutes(),
//   seconds: date.getSeconds(),
//   ampm: "",
// })

// const civilianHours = clockTime => ({
//   ...clockTime,
//   hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
// })

// const appendAMPM = clockTime => ({
//   ...clockTime,
//   ampm: clockTime.hours >= 12 ? "PM" : "AM"
// })

// // Функция, которая передает время в адрес цели - например, в console.log()
// const display = target => time => target(time);

// const formatClock = format => time => 
//   format
//     .replace("hh", time.hours)
//     .replace("mm", time.minutes)
//     .replace("ss", time.seconds)
//     .replace("tt", time.ampm)

// const prependZero = key => clockTime => ({
//   ...clockTime,
//   key: clockTime[key] < 10 ? `0${clockTime[key]}` : clockTime[key]
// })

// const compose = (...functions) => 
//   (argument) => 
//     functions.reduce(
//       (composed, func) => func(composed), argument
//     )

// const convertToCivilianTime = clockTime => 
//   compose(appendAMPM, civilianHours)(clockTime);

// const doubleDigits = civilianTime => 
//     compose(prependZero("hours"), prependZero("minutes"), prependZero("seconds"))(civilianTime);

// const startTicking = () => setInterval(compose(clear, getCurrentTime, serializeClockTime, convertToCivilianTime, doubleDigits, formatClock("hh:mm:ss tt"), display(log)), oneSecond())

// startTicking();
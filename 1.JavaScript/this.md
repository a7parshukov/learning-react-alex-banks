# Потеря this

При передаче методов объекта в качестве колбэка (например `setTimeout()`) возникает проблема потери `this`.
```javascript
let user = {
  firstName: "Mike",
  sayHi() {
    console.log(`Привет ${this.firstName}`);
  }
};
setTimeout(user.sayHi, 1000); // Привет undefined
```
Кстати, можно попытаться вызвать функцию сразу в колбэке:
```javascript
setTimeout(user.sayHi(), 1000); // Привет Mike. 
// Но - TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received undefined
```
Решение 1 - **использовать функцию-обёртку**
```javascript
let user = {
  firstName: "Mike",
  sayHi() {
    console.log(`Привет ${this.firstName}`);
  }
};

setTimeout(function() {
  user.sayHi()
}, 1000) // Привет Mike
```
**Минусы данного решения** в течении таймаута можно перезаписать значение:
```javascript
let user = {
  firstName: "Mike",
  sayHi() {
    console.log(`Привет ${this.firstName}`);
  }
};
setTimeout(() => user.sayHi(), 1000) // 
user.sayHi = function() {
  console.log("Изменили значение")
}
// Изменили значение - пока функция выполнялась, значение внутри изменилось.
```

Решение 2 - **использование метода bind()**

Можно привязать внутренний метод:
```javascript
let user = {
  firstName: "Mike",
  sayHi() {
    console.log(`Привет ${this.firstName}`);
  }
};
let funcUser = user.sayHi.bind(user);
setTimeout(funcUser, 1000); // Привет Mike
```
Так же можно привязать и стороннюю функцию:
```javascript
let user = {
  firstName: "Mike",
}

function sayHi() {
  console.log(`Hello ${this.firstName}`)
}

let funcUser = sayHi.bind(user);
setTimeout(funcUser, 1000); // Привет Mike
```

## Применение bind(), apply(), call() для связки контекста this
Как применять методы одного объекта к другому объекту? Рассматриваем три метода:
1. Метод **call()** привязывает аргументы:
```javascript
const obj = {
  num: 2
}

function addOne(a) {
  return this.num + a
}
console.log(addOne.call(obj, 5)); // 7

function addMany(a, b, c) {
  return this.num + a + b + c;
}
console.log(addMany.call(obj, 1, 2, 3)); // 8
```
Рассмотрим на реальном примере - **создание цепочек конструкторов объектов**
```javascript
function Item(name, price) {
  this.name = name,
  this.price = price,
  this.description = `This is ${this.name}, price ${this.price}`
}
function Car(name, price) {
  Item.call(this, name, price)
}
function Fruit(name, price) {
  Item.call(this, name, price)
}
const bmw = new Car("BMW", 10000);
console.log(bmw.description); // This is BMW, price 10000
const banana = new Fruit("Banana", 10);
console.log(banana.description); // This is Banana, price 10
```
Или пример - **вызов анонимной функции**
```javascript
const queue = [
  { name: "Matt" },
  { name: "Jack" }
];

for (let i = 0; i < queue.length; i++) {
  (function(i) {
    this.displayInfo = function() {
      console.log(`Position ${i}: ${this.name}`);
    }
    this.displayInfo();
  }).call(queue[i], i);
}
```

2. Метод **apply()** привязывает массив значений:
```javascript
const obj = {
  num: 2
}

function add(a, b, c) {
  return this.num + a + b + c;
}

console.log(add.apply(obj, [1, 2, 3])); // 8
```

Реальная задача - добавление одного массива к другому:
```javascript
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
num1.push.apply(num1, num2);
console.log(num1); // [ 1, 2, 3, 4, 5, 6 ]
console.log(num2); // [4, 5, 6]
```
В целом это можно провернуть и через `concat()`:
```javascript
const newNum = num1.concat(num2);
console.log(newNum);
```

3. Метод **bind()** привязывает значения и возвращает функцию:
```javascript
const obj = {
  num: 2
}

function add(a, b) {
  return this.num + a + b;
}

console.log(add.bind(obj, 1, 2)); // результата не будет - [Function: bound add]
const newAdd = add.bind(obj, 1, 2);
console.log(newAdd()); // 5 - bind возвращает функцию. Её надо вызвать!
```

В реальных задачах, `bind()` широко применяется в работе с `SetTimeout()`:
```javascript
let person = {
  name: "Jhon",
  getName: function() {
    console.log(this.name);
  }
}
globalThis.setTimeout(person.getName, 1000); // undefined
```
Чтобы this привязался не к глобальному объекту, а к конкретному объекту, привяжем через `bind()`:
```javascript
let func = person.getName.bind(person);
setTimeout(func, 1000); // Jhon
```
# JAVASCRIPT для REACT

## Объявление переменных
Пример с **var**:
```javascript
var pizza = true;
pizza = false;
console.log(pizza); // false
```
Пример с **const**:
```javascript
const pizza = true;
pizza = false; 
// => Uncaught TypeError: invalid assignment to const 'pizza'
```

## Область видимости и слово let
Переменная **var** переопределяет глобальное значение переменной:
```javascript
var topic = "JavaScript";
if(topic) {
  var topic = "React";
  console.log(`block ${topic}`); // block React
}
console.log(`global ${topic}`); // global React
```
Ключевое слово **let** не трогает глобальное значение:
```javascript
var topic = "JavaScript";
if(topic) {
  let topic = "React";
  console.log(`block ${topic}`); // block React
}
console.log(`global ${topic}`); // global JavaScript
```

## Создание функций
Можно объявить функцию, а можно функциональное выражение.
Пример объявления функции:
```javascript
function logCompliment() {
  console.log("Hello");
}
```
Пример объявления функционального выражения:
```javascript
const logCompliment = function() {
  console.log("Hello");
}
```
Пример объявления стрелочной функции:
```javascript
const logHello = () => console.log("Hello");
logHello();
```

**Отличие**: вызывать функцию можно до её объявления.
Функциональное выражение можно вызывать только после объявления. Если вызвать до, то будет ошибка `ReferenceError: Cannot access 'logCompliment' before initialization`.
Аналогично и для **стрелочной функции** - вызывать функцию ДО её объявления нельзя.

**Значения по умолчанию** для функций можно сделать прямо в объявлении функции:
```javascript
function logHello(name="Monk", text="I`m blind.") {
  return `Hello ${name}, is VSCode, ${text}`
}
```
Если значения есть:
```javascript
console.log(logHello("John", "how are you?"));
// Hello John, is VSCode, how are you?
```

Если значений нет:
```javascript
console.log(logHello());
// Hello Monk, is VSCode, I`m blind
```
## Стрелочные функции:
Стрелочные функции и ограничения видимости:
```javascript
const tahoe = {
  mountains: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
  print: function(delay=1000) {
    setTimeout(function() {
      console.log(this.mountains.join(","));
    }, delay);
  }
}
tahoe.print(); // TypeError: Cannot read properties of undefined (reading 'join')
console.log(this) // Window {}
```
Если заменить setTimeout на стрелочную функцию, то все заработает:
```javascript
const tahoe = {
  mountains: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
  print: function(delay=1000) {
    setTimeout(() => {
      console.log(this.mountains.join(", "));
    }, delay);
  }
}
tahoe.print(); // Kirkwood, Squaw, Alpine, Heavenly, Northstar
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

## Объекты
Чтобы правильно вернуть (создать) объект нужно:
```javascript
const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName
})
console.log(person("Brad", "Janson")); // { first: 'Brad', last: 'Janson' }
```
Если круглых скобок нет, то будет `SyntaxError: Unexpected token ':'`
# JAVASCRIPT

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
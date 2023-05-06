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

**Отличие**: вызывать функцию можно до её объявления.
Функциональное выражение можно вызывать только после объявления. Если вызвать до, то будет ошибка `ReferenceError: Cannot access 'logCompliment' before initialization`.


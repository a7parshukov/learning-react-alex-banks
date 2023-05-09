# Функциональное программирование

1. Функции можно объявлять как переменные. Два варианта задания:
```javascript
const log = function(message) {
  console.log(message)
}
log("Hello"); // Hello

const logArrow = message => console.log(message);
logArrow("Hello"); // Hello
```

2. Функции можно вставлять в объекты:
```javascript
const object = {
  message: "Hello, this is object",
  log(message) {
    console.log(message)
  }
}
object.log("Hello out"); // Hello out
object.log(object.message); // Hello, this is object
```

3. Функции можно вставлять в массивы:
```javascript
const messages = [
  "Hello 123",
  message => console.log(message),
  "Hello 321",
  message => console.log(message),
]
messages[1](messages[0]); // Hello 123
messages[1](messages[2]); // Hello 321
```

4. Передать функцию как аргумент в другую функцию:
```javascript
const insideFunc = logger => {
  logger("Я внутри функции")
}
insideFunc(message => console.log(message)); //Я внутри функции
```

5. Функции можно вернуть из других функций (как переменные):
```javascript
const createScream = function(logger) {
  return function(message) {
    logger(message.toUpperCase() + "!!!")
  }
}
const scream = createScream(message => console.log(message));
scream("hello my friend") // HELLO MY FRIEND!!!
```

## Функциональные концепции
### Неизменяемость
Функция ниже изменяет оригинальный объект:
```javascript
let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0
}
function rateColor(color, rating) {
  color.rating = rating;
  return color;
}
console.log(rateColor(color_lawn, 5)); // { title: 'lawn', color: '#00FF00', rating: 5 }
console.log(color_lawn); // { title: 'lawn', color: '#00FF00', rating: 5 }
```
Стоит заметить, что изменение `let` на `const` ничего не даст.


Переписываем функцию `rateColor()`, чтобы она была **неизменяемой**:
```javascript
let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0
}

// Вариант 1:
const rateColor = function (color, rating) {
  return Object.assign({}, color, { rating: rating })
}
// Вариант 2:
const rateColor = (color, rating) => ({
  ...color,
  rating: rating
})

// Результат:
console.log(rateColor(color_lawn, 5)); // { title: 'lawn', color: '#00FF00', rating: 5 }
console.log(color_lawn); // { title: 'lawn', color: '#00FF00', rating: 0 }
```

Другой пример - изменение массива:
```javascript
let list = [
  { title: "Rad Red" },
  { title: "Lawn" },
  { title: "Party Pink" }
]
const addColor = function(title, colors) {
  colors.push({title: title});
  return colors;
}
console.log(addColor("Green", list));
console.log(list);
/* в обоих случаях
[
  { title: 'Rad Red' },
  { title: 'Lawn' },
  { title: 'Party Pink' },
  { title: 'Green' }
]
Массив изменен.
*/

// изменяем функцию addColor:
const addColor = (title, array) => array.concat({ title })
console.log(addColor("Green", list));
/*
[
  { title: 'Rad Red' },
  { title: 'Lawn' },
  { title: 'Party Pink' },
  { title: 'Green' }
]
*/
console.log(list); // [ { title: 'Rad Red' }, { title: 'Lawn' }, { title: 'Party Pink' } ] == оригинал не изменен.

// можно использовать другой вариант:
const addColor = (title, array) => [...array, { title }];
console.log(addColor("Green", list));
console.log(list);
// аналогично - оригинальный массив не был изменен.
```
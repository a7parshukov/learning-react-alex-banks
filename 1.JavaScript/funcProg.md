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
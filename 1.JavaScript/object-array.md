# Объекты и массивы

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

## Деструктуризация объектов
Можно извлекать переменные из объектов:
```javascript
const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"]
}

let { bread, meat } = sandwich;
console.log(bread); // dutch crunch
console.log(meat); // tuna
```

Переменные можно изменять - оригинальный объект, не изменится:
```javascript
bread = "new bread";
meat = "new meat";
console.log(bread); // new bread
console.log(meat); // new meat
console.log(sandwich);
/*
{
  bread: 'dutch crunch',
  meat: 'tuna',
  cheese: 'swiss',
  toppings: [ 'lettuce', 'tomato', 'mustard' ]
}
*/
```
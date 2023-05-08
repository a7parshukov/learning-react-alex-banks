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

Переменные можно изменять - оригинальный объект не изменится:
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

Пример с обращением через точку и с деструктурированием:
```javascript
const lordify = regularPerson => {
  console.log(`${regularPerson.firstName} of Canterbury`);
}

const regularPerson = {
  firstName: "Bill",
  lastName: "Wilson"
}

lordify(regularPerson); // Bill of Canterbury
```

```javascript
const lordify = ({ firstName }) => {
  console.log(`${firstName} of Canterbury`);
}

const regularPerson = {
  firstName: "Bill",
  lastName: "Wilson"
}

lordify(regularPerson); // Bill of Canterbury
```
Деструктурирование вложенного объекта:
```javascript
const regularPerson = {
  firstName: "Bill",
  lastName: "Wilson",
  spouse: {
    firstName: "Phil",
    lastName: "Wilson"
  }
}

const lordify = ({ spouse: { firstName } }) => {
  console.log(`${firstName} of Canterbury`);
}

lordify(regularPerson); // Phil of Canterbury
```

Создать объект из переменных можно следующим способом:
```javascript
const name = "Tallac";
const elevation = 9738;
const funHike = { name, elevation }
console.log(funHike); // { name: 'Tallac', elevation: 9738 }
```
Так же можно и метод добавить с контекстом:
```javascript
const name = "Tallac";
const elevation = 9738;
const print = function() {
  console.log(`Mt. ${this.name} is ${this.elevation} feet tall.`)
}
const funHike = { name, elevation, print }
funHike.print(); // Mt. Tallac is 9738 feet tall.
```

## Массивы
Из массивов также можно деструктурировать переменные:
```javascript
const [firstAnimal] = ["Horse", "Mouse", "Cat"];
console.log(firstAnimal); // Horse

const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];
console.log(thirdAnimal); // Cat
```


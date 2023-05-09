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

**Объединение объектов** при помощи spread оператора:
```javascript
const morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly"
}
const dinner = "mac and cheese"

const newObj = {
  ...morning,
  dinner
}
console.log(newObj);
/* {
  breakfast: 'oatmeal',
  lunch: 'peanut butter and jelly',
  dinner: 'mac and cheese'
}
*/
```

## Массивы
Из массивов также можно деструктурировать переменные:
```javascript
const [firstAnimal] = ["Horse", "Mouse", "Cat"];
console.log(firstAnimal); // Horse

const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];
console.log(thirdAnimal); // Cat
```

**Оператор распространения**. Выполняет несколько функций:
1. Комбинирует массивы
```javascript
const peaks = ["Tallac", "Ralston", "Rose"]
const canyons = ["Ward", "Blackwood"]
const newArr = [...peaks, ...canyons]
console.log(newArr); // [ 'Tallac', 'Ralston', 'Rose', 'Ward', 'Blackwood' ]
```
2. Получение элемента из массива.
Применение стандратных средств:
```javascript
const peaks = ["Tallac", "Ralston", "Rose"]
const canyons = ["Ward", "Blackwood"]
const newArr = [...peaks, ...canyons]
const [lastElem] = newArr.toReversed(); 
console.log(lastElem); // Blackwood
console.log(newArr); // [ 'Tallac', 'Ralston', 'Rose', 'Ward', 'Blackwood' ] - метод toReversed() не изменяет оригинальный массив
```
Применение оператора spread:
```javascript
const array = ["Tallac", "Ralston", "Rose", "Ward", "Blackwood"];
const [lastElem] = [...array].reverse();
console.log(lastElem); // Blackwood
console.log(array); // [ 'Tallac', 'Ralston', 'Rose', 'Ward', 'Blackwood' ] - метод reverse() меняет оригинальный массив. Но в данном случае этого не произошло.
```
3. Получение оставшихся элементов в массиве:
```javascript
const array = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = array;

console.log(array); // [ 'Donner', 'Marlette', 'Fallen Leaf', 'Cascade' ]
console.log(first); // Donner
console.log(others); // [ 'Marlette', 'Fallen Leaf', 'Cascade' ]
```
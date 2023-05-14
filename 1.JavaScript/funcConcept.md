# Функциональные концепции
## Неизменяемость
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

## Чистые функции
Чистая функция это функция, которая вычисляет значение на основе ее аргументов.
В чистой функции всегда есть хотя бы **один аргумент**. Они
1. Не вызывают побочных эффектов
2. Не изменяют глобальные переменные
3. Выдают один и тот же результат при одинаковых параметрах.

```js
const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false
}

function selfEducate() {
  frederick.canRead = true
  frederick.canWrite = true
}

selfEducate();
console.log(frederick); // { name: 'Frederick Douglass', canRead: true, canWrite: true }
```
В примере выше функция `selfEducate()` изменила объект. Она НЕ ЯВЛЯЕТСЯ чистой функцией.

Перепишем данную функцию в чистую:

```js
const  frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false
}

const selfEducate = person => ({
  ...person,
  canRead: true,
  canWrite: true
})

console.log(selfEducate(frederick)); // { name: 'Frederick Douglass', canRead: true, canWrite: true }
console.log(frederick); // { name: 'Frederick Douglass', canRead: false, canWrite: false }
```

**В REACT пользовательский интерфейс выражается чистыми функциями**

## Преобразование данных
1. Преобразуем массив в строку:
```js
const schools = [
  "Yorktown",
  "Washington & Lee",
  "Wakefield"
]
const string = schools.join(", ");
console.log(string); // Yorktown, Washington & Lee, Wakefield
```

2. Фильтруем массив и получаем новый массив:
```js
const schools = [
  "Yorktown",
  "Washington & Lee",
  "Wakefield"
]
const wSchools = schools.filter(school => school[0] === "W");
console.log(wSchools); // [ 'Washington & Lee', 'Wakefield' ]
```

Важно знать, что `Array.filter()` не изменяет оригинальный массив.
```js
const cutSchool = (cut, school) => school.filter(s => s !== cut);
console.log(cutSchool("Yorktown", schools)); // [ 'Washington & Lee', 'Wakefield' ]
console.log(schools); // [ 'Yorktown', 'Washington & Lee', 'Wakefield' ]
```

3. Изменяем массив:
```js
const highSchool = schools.map(elem => `${elem} High School`);
console.log(highSchool);
/*
[
  'Yorktown High School',
  'Washington & Lee High School',
  'Wakefield High School'
]
*/
console.log(schools); // [ 'Yorktown', 'Washington & Lee', 'Wakefield' ]
```

Можно получить объект массивов из массива:
```js
const objSchool = schools.map(elem => ({ name: elem }));
console.log(objSchool);
/*
[
  { name: 'Yorktown' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' }
]
*/
```

4. Работа с массивом объектов:
```js
const schools = [
  { name: 'Yorktown' },
  { name: 'Stratford' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' }
]
const editName = (oldName, newName, array) =>
  array.map(elem => {
    if (elem.name === oldName) {
      return {
        ...elem,
        name: newName
      }
    } else {
      return elem
    }
  })
const newSchools = editName("Stratford", "Woodlawn", schools);
console.log(newSchools);
/*
[
  { name: 'Yorktown' },
  { name: 'Woodlawn' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' }
]
*/
console.log(schools);
/*
[
  { name: 'Yorktown' },
  { name: 'Stratford' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' }
]
*/
```
Итого, оригинальный массив не был изменён. Можно переписать функцию `editName()` и получить тот же результат:
```js
const editName = (oldName, newName, array) => 
  array.map(elem => (elem.name === oldName) ? { ...elem, name: newName } : elem)
```

5. Преобразовываем объект в массив объектов:
```js
const schoolsObj = {
  "Yorktown": 10,
  "Washington & Lee": 2,
  "Wakefield": 5
}

const schoolsArr = Object.keys(schoolsObj).map(elem => ({
  name: elem,
  wins: schoolsObj[elem]
}));
console.log(schoolsArr);
/*
[
  { name: 'Yorktown', wins: 10 },
  { name: 'Washington & Lee', wins: 2 },
  { name: 'Wakefield', wins: 5 }
]
*/
```

6. Преобразовываем массив в любое значение.
В примерах ниже вычислим сумму чисел массива и маскимальное значение из массива чисел:
```js
const ages = [21, 18, 42, 40, 64, 63, 34];

const sumAges = ages.reduce((sum, current) => sum + current, 0);
console.log(sumAges); // 282 - сумма чисел.

const maxAges = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max} `);
  if(age > max) {
    return age;
  } else {
    return max;
  }
}, 0)
/*
21 > 0 = true 
18 > 21 = false 
42 > 21 = true 
40 > 42 = false 
64 > 42 = true 
63 > 64 = false 
34 > 64 = false 
*/
```
Сокращенная форма функции:
```js
const maxAges = ages.reduce((max, age) => ((age > max) ? age : max), 0);
console.log(maxAges); //64
```

7. Преобразование массива в объект (хеш?):

```js
const colors = [
  {
    id: '-xekare',
    title: "rad red",
    rating: 3
  },
  {
    id: '-jbwsof',
    title: "big blue",
    rating: 2
  },
  {
    id: '-prigbj',
    title: "grizzly grey",
    rating: 5
  },
  {
    id: '-ryhbhsl',
    title: "banana",
    rating: 1
  }
]

const hashColors = colors.reduce((hash, {id, title, rating}) => {
  hash[id] = {
    title,
    rating
  }
  return hash;
}, {})
console.log(hashColors);
/*
{
  '-xekare': { title: 'rad red', rating: 3 },
  '-jbwsof': { title: 'big blue', rating: 2 },
  '-prigbj': { title: 'grizzly grey', rating: 5 },
  '-ryhbhsl': { title: 'banana', rating: 1 }
}
*/
```

8. Превратить массив в другой массив:
Аналог функционала `array.filter()`:
```js
const colors = ["red", "red", "green", "blue", "green"];

const uniqueColors = colors.reduce(
  (unique, color) => 
    unique.indexOf(color) !== -1 ? unique : [...unique, color], []
)
console.log(uniqueColors); // [ 'red', 'green', 'blue' ]
```
Если индекс цвета не найден в текущем массиве (равен -1), то добавляем цвет в массив.


## Функции высшего порядка
Функции высшего порядка оперируют функциями "низшего" порядка. Яркий пример был выше - функции `map()`, `reduce()`. 
Приведем пример в ручную созданной функции высшего порядка:
```js
const showWelcome = () => console.log("Welcome!");
const showUnauthorized = () => console.log("Unauthorized...");
const invokeIf = (condition, funcTrue, funcFalse) => {
  condition ? funcTrue() : funcFalse()
}

invokeIf(true, showWelcome, showUnauthorized); // Welcome!
invokeIf(false, showWelcome, showUnauthorized); // Unauthorized...
```
**Основная суть использования таких функций** это помощь в работе с асинхронным JavaScript.


## Рекурсия
Рекурсия это такой инструмент, который позволяет создать функцию, вызывающую саму себя.
```js
const countdown = (value, func) => {
  func(value);
  return value > 0 ? countdown(value - 1, func) : value
}
countdown(10, value => console.log(value)); // 10...0
```
Использовать рекурсию можно для создания таймеров (не забыть про `setTimeout()`), а так же для поиска конкретного значения в большой структуре данных (поиск в каталогах конкретного файла, или, поиск конкретной информации в HTML DOM)
```js
const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon"
      }
    }
  }
}

const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split(".")
  return remaining.length ? deepPick(remaining.join("."), object[first]) : object[first]
};
console.log(deepPick("data.info.fullname.first", dan))
```

## Композиция
Композиция определяет последовательность выполнения функций. Можно вызывать функции последовательно (шаг за шагом), а можно создать общую композиционную функцию. 

Создадим функции:
```js
const createClockTime = date => ({date})

const appendAMPM = ({date}) => ({
  date,
  ampm: (date.getHours() >= 12) ? "PM" : "AM"
})

const civilianHours = clockTime => {
  const hours = clockTime.date.getHours();
  return {
    ...clockTime,
    hours: (hours > 12) ? hours - 12 : hours
  }
}

const removeDate = clockTime => {
  let newTime = {...clockTime};
  delete newTime.date;
  return newTime
}
```

Делаем вызов последовательно:
```js
const step1 = createClockTime(new Date());
console.log(step1);
const step2 = appendAMPM(step1);
console.log(step2);
const step3 = civilianHours(step2);
console.log(step3);
const step4 = removeDate(step3);
console.log(step4);
/*
Результаты console.log:
{ date: 2023-05-14T11:38:57.169Z }
{ date: 2023-05-14T11:38:57.169Z, ampm: 'PM' }
{ date: 2023-05-14T11:38:57.169Z, ampm: 'PM', hours: 2 }
{ ampm: 'PM', hours: 2 }
*/
```

При помощи `reduce()` можно сделать последовательный вызов функций внутри одной функции (высшая функция):
```js
const compose = (...functions) => 
  (argument) => 
    functions.reduce(
      (composed, func) => func(composed), argument
    )

const oneFunc = compose(
  createClockTime,
  appendAMPM,
  civilianHours,
  removeDate
)

console.log(oneFunc(new Date())); // { ampm: 'PM', hours: 2 }
```
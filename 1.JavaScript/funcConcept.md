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
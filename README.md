# REACT: Современные шаблоны для разработки приложений
## Объявление переменных
Пример с `var`:
```javascript
var pizza = true;
pizza = false;
console.log(pizza); // false
```
Пример с `const`:
```javascript
const pizza = true;
pizza = false; // => Uncaught TypeError: invalid assignment to const 'pizza'
```
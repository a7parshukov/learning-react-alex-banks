# Декларативное и императивное программирование

**Декларативное** программирование описывает ЧТО должно произойти, а **императивное** программирование описывает КАК это должно произойти.

Например задача - сделать удобный для URL адрес из строки:
```javascript
// Пример императивного подхода:
const string = "Restaurants in Hanalei";
let url = "";
for (let i = 0; i < string.length; i++) {
  if(string[i] === " ") {
    url += "-"
  } else {
    url += string[i]
  }
}
console.log(url); // Restaurants-in-Hanalei

// Пример декларативного подхода:
const string = "Restaurants in Hanalei";
let url = string.replace(/ /g, "-");
console.log(url); // Restaurants-in-Hanalei
```
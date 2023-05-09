# Классы

Старый формат определения классов через `prototype`:
```javascript
function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
};
Vacation.prototype.print = function() {
  console.log(`${this.destination} | ${this.length} days`)
};
const maui = new Vacation("Maui", 7);
maui.print(); // Maui | 7 days
```

Новый формат задания классов:
```javascript
class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(`${this.destination} | ${this.length} days`)
  }
}
const maui = new Vacation("Maui", 7);
maui.print(); // Maui | 7 days
```

Расширим класс `Vacation`:
```javascript
class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}
const trip = new Expedition("Mt. Whitney", 3, [
  "sunglasses",
  "prayer flags",
  "camera"
]);
trip.print();
/*
Mt. Whitney | 3 days
Bring your sunglasses and your prayer flags and your camera
*/
```

**В настоящее время классовый подход в React отменяется, переход на функциональный подход.**
// let arr = [11, 22, 33, 44, 55];

// for (let i in arr) {
//   console.log(i);
// }

const animal = {
  name: 'animal',
 
  tag() {
    alert('Привет, ' + this.name);
  }
}

// animal.tag();

const rabbit = {
  name: 'Крош',
  __proto__: animal
}

rabbit.__proto__ = Array.prototype;

console.log(rabbit);


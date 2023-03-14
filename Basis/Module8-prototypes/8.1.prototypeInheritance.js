// let admin = {
//     job: 'admin',
// };

// console.log(admin.__proto__);

let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(digits.__proto__);

// let string = 'string nuber one';

// let len = '16';

// len.__proto__ = string;

// console.log(len.length);

// let animal = {
//     eats: true,
//     walk() {
//         alert(`${this} walking`)
//     }
// };

// let rabbit = {
//     __proto__: animal
// };

// console.log(animal.walk());
// console.log(rabbit.walk());

// animal.__proto__ = ;

// digits.__proto__ = null;

// digits.forEach(elem => {
//     console.log(elem);
// })

let user = {
    name: 'John', 
    surname: 'Kalligan',

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }, 

    get fullName() {
        console.log(this);
        return `${this.name} ${this.surname}`;
        
    }
};

let admin = {
    __proto__: user,
    isAdmin: true,
};

// alert(admin.fullName);

// admin.fullName = 'Ksenia Federova';

// alert(admin.fullName);
// alert(user.fullName);

let animal = {
    walk() {
        if ( !this.isSleeping ) {
            alert('I walk');
        }
    },

    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: 'White Rabbit',
    __proto__: animal,
};

// animal.sleep();

// alert(animal.isSleeping);

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// alert(pockets.pen);
// alert(bed.glasses);

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

lazy.eat('apple');
// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple
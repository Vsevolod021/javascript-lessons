let animal =  {
    eats: true
};

let bird = {
    flies: true
}

function Rabbit(nickname) {
    this.nickname = nickname;
}

Rabbit.prototype = animal;

let rabbit1 = new Rabbit('George');
let rabbit2 = new Rabbit('Max');

// alert( rabbit1.eats );
// alert( rabbit2.eats );

// Rabbit.prototype = bird;

// // let rabbit1 = new Rabbit('George'); 
// // let rabbit2 = new Rabbit('Max');
// let rabbit3 = new Rabbit('Alex');

// alert( rabbit3.flies ); // true
// alert( rabbit2.flies ); // undefined

function foo() {
    alert('hello');
}

console.log(foo.prototype);
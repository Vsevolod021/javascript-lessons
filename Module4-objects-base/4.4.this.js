/* let user = {
    name: 'John',
    age: 30,
}

user.sayHi = () => alert('hello world'); 


let user = {
    name: 'John',
    age: 30,
    sayHi() {
        alert('hello world');
    },
    showName() {
        alert(this.name);
    }
}

user.sayHi();
user.showName();
// alert(user);

let sayHello = () => {
    console.log(this.prompt);
}

sayHello();



const userData = {
    name: 'Vsevolod',
    birthday: '21.09.2000',
    job: 'frontender',
    showName() {
        let foo = function() {
            console.log(this.name);
        };
        foo();
    },
    showThis() {
        console.log(this);
    },
    this: this,
}

userData.showName();

userData.showThis();
'use strict';

function makeUser() {
  return {
    name: "John",
    ref() {
        return this
    },
  };
}

let user = makeUser();
console.log(user.ref().name);

let calculator = {
    read() {
        this.first = prompt('a?');
        this.second = prompt('b?');
    },
    sum() {
        return +this.first + +this.second;
    },
    mul() {
        return this.first * this.second;
    }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};
ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0
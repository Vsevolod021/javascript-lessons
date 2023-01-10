'use strict';
let person = {
    name: 'John',
    secondName: 'Kalligan',

    get fullName() {
        return this.name + ' ' + this.secondName;
    },

    // set fullName(value) {
    //     [this.name, this.secondName] = value.split(' ');
    // }
};

// alert(person.fullName);
// person.fullName = 'Vsevolod Voskresensky';
// alert(person.fullName);
// person.name = 'adfbdgsb0';
// console.log(person);


let user = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            alert('имя слишком корочкое, должно быть не менее 4 символов');
            return;
        }
        this._name = value;
    }
};

// alert(user._name);
// user.name = 'Pete';
// alert(user.name);
// user.name = 'sdb';

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, 'age', {
        get() {
            let today = Date.now();
            return new Date(today - this.birthday.getTime()).getFullYear() - 1970;
        }
    });
}

let me = new User('Vsevolod', new Date('2000-01-09'));
console.log(me.age);



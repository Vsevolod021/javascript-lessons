/* let obj1 = {
    '1': 1
};

let obj2 = '1sadvas';


console.log({}.valueOf()); 

let maus = {
    tank: 'Maus',
    toString() {
        return this.tank;
    },
    valueOf() {
        return 3000;
    }
};

let is4 = {
    tank: 'IS-4',
    toString() {
        return this.tank;
    },
    valueOf() {
        return 2500;
    }
}

alert(is4 ** 2);*/

let person = {
    name: 'JSON',
    money: 100000,
    [Symbol.toPrimitive](hint) {
        return (hint == 'string') ? this.name : this.money;
    }
}

alert(+person);
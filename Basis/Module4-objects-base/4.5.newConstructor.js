/* function User(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
}

let user = new User('Jack', true);

alert(user.name);
alert(user.isAdmin);

function User(name) {
    this.name = name;
}

let john = new User('John');
alert(john.name);
new User(); 

function BigUser() {
    this.name = 'John';
    this.sayHi = function() {
        alert(`Меня зовут ${this.name}`)
    }
}

alert(new BigUser().name);
new BigUser().sayHi();

let obj = {name: 'John'};

function A() {
    return obj;
}
function B() {
    return obj;
}

let a = new A();
let b = new B();

alert( a == b ); // true


let Calculator = function() {
    this.read = function() {
        this.first = prompt('a?');
        this.second = prompt('b?');
    },
    this.sum = function() {
        return +this.first + +this.second;
    },
    this.mul = function() {
        return this.first * this.second;
    }

};

let calculator = new Calculator();

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

let Accumulator = function(value) {
    this.value = value;
    this.read = function() {
        this.value+= +prompt('Введите число');
    }
};

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
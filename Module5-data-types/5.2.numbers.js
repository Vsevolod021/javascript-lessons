/* 
let ms = 1e-3,
    mcs = 1e-6,
    one = 1e0,
    google = 1e100

alert(ms + '\n' + mcs + '\n' + one + '\n' + google);


let num = 174;
alert(num.toString(2));

let thirtySix = 35;
alert(thirtySix.toString(36))

alert(72..toString());

alert( 0.1.toFixed(20) );
alert( isFinite(1e900));
alert(isNaN('str'));
alert(Number.isNaN('saiviasf' / 1));

let width = '500px';
let cost = '5.5$';

alert(parseInt(width, 6));
alert(parseInt(width, 10));
alert(parseInt(cost));
*/


//    sum of 2 numbers     
function showSum() {
    let num1 = +prompt('Введите число?'),
        num2 = +prompt('Введите число?');

    alert((num1 + num2))
}

//alert( ((6.35 * 10).toFixed(20) / 10) );
//alert( ((5.35 * 10).toFixed(20) / 10).toFixed(2) );
//alert( ((4.35 * 10).toFixed(20) / 10).toFixed(2) );
//alert( ((3.35 * 10).toFixed(20) / 10).toFixed(2) );

function readNumber() {
    let num;

    while (true) {
        num = prompt('Введите число');
        if (!isNaN(num) || num === null || num === '') {
            return;
        } 
    }
}

// alert(prompt('Введите число'));
// readNumber();

function random(min, max) {
    return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
    return (min + Math.random() * (max - min)).toFixed(0)
}

alert(randomInteger(1, 5));
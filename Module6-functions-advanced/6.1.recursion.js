/*
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
    //   salary: 1300
    }]
  }
};



function countSalaries(structure) {
    if (Array.isArray(structure)) {
        return structure.reduce((acum, elem) => acum + countSalaries(elem), 0);
    } else {
        if (!('salary' in structure)) {
            return countSalaries(Object.values(structure));
        } else {
            return structure.salary;
        }
    }
}


function sumSalaries(department) {
  if (Array.isArray(department)) { // случай (1)
    return department.reduce((prev, current) => {
        if (!current.salary) {
            return prev;
        }
        return (prev + current.salary)}, 0); // сумма элементов массива
  } else { // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}

alert(sumSalaries(company));
*/


// task #1 
// function sumTo(n) {
//     return (n == 1) ? 1 : n + sumTo(n - 1);
// }

// function sumTo(n) {
//     let sum = 0;
//     for (let i=1; i<=n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// function sumTo(n) {
//     return n * (1 + n) / 2;
// }

// alert(sumTo(1000000));

// task #2
// function factorial(n) {
//     return (n == 0 || n == 1) ? 1 : (n * factorial(n - 1));
// }

// alert(factorial(5));

// task #3
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//     let last = 1;
//     let beforeLast = 0;
//     let fibValue;
//     if (n == 0) return beforeLast;
//     else if (n == 1) return last; 

//     for (let i = 2; i <= n; i++) {
//         fibValue = last + beforeLast;
//         beforeLast = last;
//         last = fibValue;
//     }
//     return fibValue;
// }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// task #4
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
            value: 5
        }
      }
    }
  }
};

// function printList(list) {
//     alert(list.value);
//     if (!list.next) {
//         return;
//     } else {
//         return printList(list.next);
//     }
// }

// function printList(list) {
//     while(list) {
//         alert(list.value);
//         list = list.next;
//     }
// }

// printList(list);

// function backList(list) {
//     const listValues = [];
//     while(list) {
//         listValues.unshift(list.value);
//         list = list.next;
//     }
//     for (let elem of listValues) {
//         alert(elem);
//     }
// }


function backList(list) {
    if (list.next) {
        backList(list.next);
    } 
    alert(list.value);
}

backList(list);
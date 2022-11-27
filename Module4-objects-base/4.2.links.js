let obj = {
    name: 'Alex',
    surname: 'Petrov'
};

let obj_copy = {};

Object.assign(obj_copy, obj);

obj_copy.age = 24;

console.log(obj);
console.log(obj_copy);


obj_copy.education = {
    university: 'KAI',
    speciality: 'Software Engineering'
};

// console.log(obj_copy.education.university);
const person = {
    name: 'Anonymous',
    age: 21
};

const copiedPerson = { ...person };

console.log(person);
console.log(copiedPerson);

const hobbies = ['Coding', 'Swimming', 'Photography'];
const copiedHobbies = [...hobbies];

console.log(hobbies);
console.log(copiedHobbies);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4, 5));

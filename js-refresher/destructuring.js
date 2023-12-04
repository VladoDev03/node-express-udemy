const person = {
    name: 'Anonymous',
    age: 21
};

const printName = ({ name }) => {
    console.log(name);
};

printName(person);

const { name, age } = person;
console.log(`${name} is ${age} years old.`);

const hobbies = ['Coding', 'Swimming', 'Photography'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

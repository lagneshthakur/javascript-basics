// destructuring
let person = {"firstName": "Django", "age": 40, "email": "django.unchained@gmail.com"}

let { firstName: x, age: y } = person;

console.log(x);
console.log(y);

function logNameAndAge({firstName, age}){
    console.log(`My name is ${firstName} and I am ${age} years old`);
}

logNameAndAge(person);
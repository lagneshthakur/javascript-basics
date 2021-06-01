// callbacks, promises and async/await
function sendBackTheSumToPrint(number1, number2, callback) {
    let sum = number1 + number2;
    callback(sum);
}
function logTheSum(sum) {
    console.log(`Sum is ${sum}`)
}
// sendBackTheSumToPrint(10, 20, logTheSum);

function greet(name, callback) {
    console.log('Hello world');
    callback(name);
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

setTimeout(greet, 2000, 'John', sayName);
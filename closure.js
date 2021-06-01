// closure
function OuterFunction() {
    var outerVariable = 100;
    function InnerFunction() {
        console.log(outerVariable);
    }
    return InnerFunction();
}
var innerFunc = OuterFunction();
innerFunc();

function makeAdder(valueToAdd) {
    function sum(parameter) {
        return valueToAdd + parameter;
    }
    return sum;
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(10));
console.log(add10(10));
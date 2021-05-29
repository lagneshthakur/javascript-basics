console.log("Hello from Javascript!");
console.log(this);
// array methods
// forEach, map, filter and reduce
const mock_data = require('./MOCK_DATA.json');

let strengths = [];  
mock_data.forEach((person) => {
    strengths.push(person.strength);
});

let mock_data_mapped = mock_data.map((person) => {
    return {
        full_name: `${person.first_name} ${person.last_name}`,
        country: person.country
    }
});
// console.log(mock_data_mapped[56]);

let mock_data_filtered = mock_data.filter((person) => {
    if(person.last_name) {
        return false;
    } else {
        return true;
    }
})

// console.log(mock_data_filtered.length);
// console.log(mock_data_filtered[24].first_name);



function reducerSum(total, currentValue) {
    return total + currentValue;
}
console.log(strengths.length)
console.log(strengths)
totalStrength = strengths.reduce(reducerSum);
console.log("Total Strength :", totalStrength)


// hoisting

// spread syntax

// destructuring

// closure

// currying

// callbacks

// promises and async/await
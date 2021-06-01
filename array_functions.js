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

let mock_data_reduced = mock_data.reduce((total, currentValue, index)=>{
    console.log(index);
    console.log(total.strength);
    return { strength: total.strength + currentValue.strength }
})

console.log("Total strength:")
console.log(JSON.stringify(mock_data_reduced))

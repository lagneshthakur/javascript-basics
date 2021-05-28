// JSON

var myDetails = {
    name: "Lagnesh",
    age: 26,
    bloodGroup: "A+"
}

JSON.parse('{"key1": "value1", "key2": 20}')
JSON.stringify(myDetails)
console.log(myDetails);
console.log(myDetails.age);
console.log(myDetails['bloodGroup']);
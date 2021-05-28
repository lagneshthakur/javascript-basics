var personName = "Global: Dave";
// let and const
// scope of variables
{
    let personName = "Philip"
    let personMarks = 10;
    personMarks = personMarks + 20;
    const personBloodGroup = 'B+';
    console.log("Inside block");
    console.log("Scoped Name: ", personName);
    console.log("Scoped Marks: ", personMarks);
    console.log("Scoped BloodGroup: ", personBloodGroup);
}
// console.log("Global BloodGroup: ", personBloodGroup);
console.log("Global ", personName);
function printName() {
    console.log("Inside function ", personName);
}
printName();
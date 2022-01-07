
//getter-returns the value- accessors(access the property)
//setter- set or update the value-modifiers
//const person={
  //  firstName:'madhu',
    //lastName: 'rao',
//};
//console.log(person.firstName+' '+person.lastName);
//console.log(`${person.firstName}${person.lastName}`); 
const emp={
    firstName: 'Madhuri',
    lastName: 'doppala',
    get fullName() {
        return `${emp.firstName}${emp.lastName}`
}
};
console.log(emp.fullName);


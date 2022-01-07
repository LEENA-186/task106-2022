const emp={
    firstName: 'Madhuri',
    lastName: 'doppala',
    get fullName() {
        return `${emp.firstName}${emp.lastName}`
},
set fullName(value){
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
}    
};
emp.fullName = 'jessy roy';

console.log(emp);



//const man={
  //  name:"mani",
//walk()
//{
//}
class Person {
    constructor(name)
{
    this.name = name;
}
getName(){
    return this.name;
}
}
const hima = new Person("Hima sree");
const name = hima.getName();
console.log(name);
 //classes defined using class declarations are hoisted 
 // donot hoists initialization
 // var x = 5; // initialization
 // var y; declaration
 // y = 7; assigning
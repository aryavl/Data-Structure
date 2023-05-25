let person ={
    name: 'arya',
    age:22,
    hobbies:['reading','listening music']
}
let newPerson= person;
console.log(newPerson);
let hobbies= newPerson.hobbies;
console.log(hobbies);
person=null;
newPerson=null;

let daughter ={
    name:'arya'
}
let dad= {
    name:'vijay',
}

daughter.dad= dad;
dad.daughter = daughter;

daughter= null;
dad=null;
console.log(daughter);
console.log(dad);
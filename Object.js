console.log("object.1 \n")
//create a person object
var person = {gender:"male",name:"Lind",leetness:"1337",Aids:"ofc"}
for(var type in person){
    console.log(type+ ": " + person[type]);
}
console.log("")
// test if the Aids property exists
console.log("does he have aids? " + person.hasOwnProperty("Aids"));
//delete Aids
delete person.Aids;
//test if the Aids property still exists
console.log("does he still have aids? " + person.hasOwnProperty("Aids"));
console.log("")

//type out everything again to check
for(var type in person){
    console.log(type+ ": " + person[type]);
}

console.log("\nobject.2 \n")

function createPerson(fn,ln,age){
return {firstName:fn,lastName:ln,age:age};
}

function infoPrint(p){
    for(var type in p){
        console.log(type+ ": " + p[type]);
    }
}
infoPrint(createPerson("Lind","Lind",23))

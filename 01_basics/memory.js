let myname = "utkarsh "
let myname_other = myname
console.log(myname_other)
// in the primitve datatype only the reference copy is passed , if we change in myname_other it will not change the orignal value

// Non primitve datatypes 
let person = function(){
       name: "utkarsh"
       age : 21
}
let person2 = person
person2.age = 23
console.log(person.age)

// in the the reference is passed in heap memory so if we changed any value then it will change in both 
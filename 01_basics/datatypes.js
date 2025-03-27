// primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol
 const score = 20
 const scoreValue = 30.33 // it will also consider as number
  
 const LoggedIn = false
 const outsidetemp = null // the value is null but not zero 
 let useremail; // this is undefined

 const id = Symbol('123')
 const anotherId = Symbol('123') // these two will return different symbol
 const bigNumber = 125863485645n // it will automatically store it as bigInt


// Reference (Non primitive)
// Array , Objects , Function
const name = ["abc" , "sdf", "rtj"] // array 

 // object creation in javascript
let person = { 
    name : "ravi",
    age: 21,
}
 // function creation
 const myfunction = function(){
    console.log("hello world");
 }

 // return type of datatype
 // undefined = > undefined 
 // null => object 
 // number => number
 // function => function or function object

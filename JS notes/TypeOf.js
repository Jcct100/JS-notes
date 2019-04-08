//Reference Error - undefined vs undeclared - undefined is a value that a declared variable can hold
//Undeclared means a variable has never been declared

//declare a variable array
var arr = []
//array is type object
console.log(typeof arr)
//need to use this
console.log(Object.prototype.toString.call(arr));
//returns [object Array]

//create a constructor
function Person(name) {
    this.name = name;
}
//declare a new instance
var e = new Person('James')
//check if e is an instance of Person
console.log(e instanceof Person);

//this returns true
console.log( null == {})
//so use this will return false
console.log(Object.prototype.toString.call(null) == {})

//this does not accurately give you a number
typeof value === number
//this is more accurate to check if a type is a number
typeof value === 'number' && !NumberisNaN(value)

//function, number and string is okay to check with typeof, only object, null and arrays

//check if string is empty use length
var a = ""
a.length == 0




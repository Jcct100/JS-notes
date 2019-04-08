
//what happens when you invoke a function in JS?

function a() {
    b();
    var c;
}

function b() {
    var d;
}

a();
var d;

//1) global execution context
//first it will create a global object with this.
//and then attached the functions a and b to the...
//..global object.

//2)invoke or call the function a as the code is
//running line by line.

//there is an execution slack and the top is where the
//code is running.

//this is the order of the slack
//1)globla execution context, 2)a() execution context, 3)b() execution context.

function a() {
    b();
    //execute first
    var c;
}

function b() {
    //execute second
    var d;
}

a();
//execute third
var d;

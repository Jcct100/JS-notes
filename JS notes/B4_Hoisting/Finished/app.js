b();
console.log(a);
//this returns 'Called b!' and 'undefined'
//because the JS engine will set up all the var, let and const..
//..as undefined first until the code is run
//this is called hoisting

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}
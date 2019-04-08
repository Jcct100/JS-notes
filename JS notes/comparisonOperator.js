
//usage:

function greet(name) {
    name = name || 'Your Name here:';
    console.log('Hello' + name);
}

//this will return tony because true || true will read the left first
greet(tony);
//this will return 'Your Name here' because false || true will read true
greet();

// ______________________________________


//this will convert to true
console.log(false || true)


//this will convert to false
console.log("")
console.log(undefined)
console.log(null)
console.log(0)

// ______________________________________


// always use === not ==
// == is coering the values before comparing with the operator


// ______________________________________

//this returns true
console.log(3 < 2 < 1);

//this is false
console.log(3 < 2)

//false is 0 and true is 1 so this returns true
console.log(0 < 1)

// console.log(0 < 1) is the same as console.log(3 < 2 < 1)

//null is also a 0
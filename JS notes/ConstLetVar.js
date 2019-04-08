//global scope: var: yes, let: no, const: no

var userId = 1; //var is set to the global window object
let postId = 200;
const siteId = 4;

console.log( window.userId); //1
console.log( window.postId); // undefined
console.log( window.siteId); // undefined

//function scope: var: yes, let: yes, const: yes

function getIds() {
    var   userId = 1;
    let   postId = 200;
    const siteId = 400;
}

console.log( userId ); //Error, undefined
console.log( postId ); //Error, undefined
console.log( siteId ); //Error, undefined

//block scope: var: no, let: yes, const: yes

//this could be in an if statement, loop etc
{
    var userId = 1;
    let postId = 200;
    const siteId = 4;

    console.log(userId); //1
    console.log(postId); //200
    console.log(siteId); //4
}

console.log(userId); //1
console.log(postId); //Error, undefined
console.log(siteId); //Error, undefined

//can be reassigned: var: yes, let: yes, const: no

const post = {},
const ids = [1,2,3],
const id = 1;

post = "Hello World!"; //Error
post.title = "Hello World"; // Allowed because you are changing the property of the object, not object
ids.push(4); //Allowed because you adding 4 to the array not changing the array
id++; //Error
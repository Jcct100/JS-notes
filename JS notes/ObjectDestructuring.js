//you could rename when deconstructing object, this is useful for keeping it readable

var post = { id: 1, title: 'Hello'};

var { id, title:name } = post;

console.log(name) //this is now title

//this might be useful to , i might use the spread operator and map over it

var post = {
    id: 1,
    slug: 'hello-oject',
    author: 1
}

var { title, ...meta } = post;

//meta will be post
console.log(title, meta);
//call

var obj = { num: 2 }

var addToThis = function(a) {
    return this.num + a;
};

addToThis.call(obj, 3); //without using call this.num is undefined

//apply - it does exactly the same thing as call but you can pass in an array

let arr = [1,2,3]
addToThis.apply(obj, arr);

var addToThis = function(a,b,c) {
    return this.num + a;
};


//bind

addToThis.bind(obj); //

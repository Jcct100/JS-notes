//map

let newArr = oldArr.map((val, index, arr) => {
    //return element to new Array
});

//newArr - the new array that is returned.
//oldArr - the array to run the map function on
//1) val - the current value being processed.
//2) index - the current index of the value being processed.
//3) arr - the original array

//filter

let newArr = oldArr.filter(callback);

//the callback function take three arguments:
//1)    element - the current element of the array.
//2)    index   - the current index of the value being processed.
//3)    arr     - the original array.

//reducer
//it returns a single value by applying a function to each element in the array

let result = arr.reduce(callback);
//optionally, you can specify an initial value
let result = arr.reduce(callback, initValue);

//result - the single value that is returned.
//arr - the array to run the reduce function on.
//callback - the function to execute on each element in the array.
//initValue - an optionally supplied initial value. If this value is not supplied, the 0th element is used as the initial value.

//the callback funtion can take four arguments:
//1) accumulator - the accumulator accumulates all the callbacks returned values.
//2) val - the current value being processed.
//3) index - the current index of the value being processed.
//4) arr - the original array


ForEach
//forEach -Use ForEach when U think of using map but don’t need to return an array

Find
//find -Use find as an alternative for filter if u don’t want to return an array
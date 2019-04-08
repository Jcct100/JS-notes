//Asychronous is more than one at a time:

//These three could be running at the same time in the browser:
//1) rendering engine
//2) the javascript engine
//3) HTTP request

function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

//this will return
//1) finished function
//2) finished execution
//3) click event

//this is because the JS engine won't look at the event queue until slack is empty

//hence the more functions and variable the longer it will take when there is an event handler.
//hence we add a loader on the page
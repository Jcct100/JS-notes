function a() {

	function b() {
  	//this will console log 2
    //because the lexical environment of b is a
  	console.log(myVar)
  }

	var myVar = 2;
	b()
}

var myVar = 1;
a();
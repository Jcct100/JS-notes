//Arrow function lexically bind their context so this actually refers to the originating context

//example one

function startGame() {
    this.lives = 0;
    this.addLives = function() {
        this.oneUp = setTimeout(function() {
            //this will console.log NaN
            console.log(++this.lives);
        }, 1000);
    }
}

var mario = new startGame();
mario.addLives

//solution to example one

function startGame() {
    this.lives = 0;
    this.addLives = () => {
        this.oneUp = setTimeout(() => {
            //this will return 1 because this refers to the originating context
            console.log(++this.lives);
        }, 1000);
    }
}

var mario = new startGame();
mario.addLives

//Poly nations example

// is better to use arrow functions in the class contructor because "this"
// refers to the originating context
// where if you use normal function you would have to use Bind


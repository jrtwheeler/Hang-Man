class Letter {
    constructor(letter, guess) {
        //a string value
        this.letter = letter;
        this.guess = false;
    }
    //  * A function that returns the underlying character if the 
    //letter has been guessed, or a placeholder (like an underscore) 
    //if the letter has not been guessed
    function returnValue() {
        if (this.letter) {
            return this.letter
        } else {
            return "_";
        }

    }

//  A function that takes a character as an argument and checks it 
// against the underlying character, 
// updating the stored boolean value to true if it was guessed correctly

    function checkValue (character) {
        if(character === this.letter) {
            //update stored boolean in array
            this.guess = true;
        } else {
            return false;
        }

    }
}

module.exports = Letter;
const letter = require("./letter");

class word extends letter{
    constructor(secretWord,newLetter,guess ) {
    this.newLetter = [this.secretWord= "","ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", 
    "CASE", "CATCH", "CHAR", "CLASS", "CONST",
          "CONTINUE", "DEFAULT", "DOUBLE", "DO", "ELSE", 
    "ENUM", "EXTENDS", "FALSE", "FINAL", "FINALLY",
          "FLOAT", "FOR", "GOTO", "IF", "IMPLEMENTS", 
    "IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG",
          "NATIVE", "NEW", "NULL", "PACKAGE", "PRIVATE", 
    "PROTECTED", "PUBLIC", "RETURN", "SHORT", "STATIC",
          "STRICTFP", "SUPER", "SWITCH", "SYNCHRONIZED", 
    "THIS", "THROW", "THROWS", "TRANSIENT", "TRUE",
          "TRY", "VOID", "VOLATILE", "WHILE"]

    
    
   function guessWord() {
    this.secretWord = this.newLetter[Math.floor(Math.random()* this.newLetter.length)];
   }
}
}
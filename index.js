const Letter = require("./letter");
//const Word = require("./word");
const inquirer = require("inquirer");

const myWord = new Letter();
//need math floor to choose a word

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "Enter your letter"
        }
    ])
}

function init() {
    promptUser()
      .then(function (answers) {
          console.log(answers)
      })
      .catch(function (err) {
        console.log(err);
      });
    }

    init();
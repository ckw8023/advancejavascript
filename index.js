var word = require("./Word.js");
var inquirer = require("inquirer");
// vocabulary database;
var wordarray = ["apple","car","cat","congradulation"];
var done = false;

// create random word
function randomword(){
	var num = Math.floor(Math.random()*wordarray.length);
	return wordarray[num];
}

// guess word function
function guessletter(item,length){
	inquirer.prompt([
		{
      		type: "input",
      		message: "Guess a letter",
      		name: "userguess"
    	},
	]).then(function(defalt){
		item.guess(defalt.userguess);
		item.display();
		if(item.status === length){
			done = true;
			console.log("You got it!");
		}
		if(item.chance == 0){
			done = true;
			console.log("You have no chance");
		}
		if(done == false){
			guessletter(item,length);
		}
	});
}

//actual game play function
function playGame(){
	var toguess = randomword();
	var newWord = new word.Word(toguess);
	newWord.display();
	guessletter(newWord,toguess.length);
}

playGame();





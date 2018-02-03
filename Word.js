var char = require("./Letter.js");

function Word(words){
	this.words = words.split('').map(function(element){
		return new char.Letter(element);
	});
	var print = [];
	this.chance = 10;
	//display content of the word object
	this.display = function(){
		print = [];
		this.words.forEach(function(element){
			print.push(element.underlying());
		});
		console.log(print.join(' '));
	}
	//determinate weather user's guess is correct or wrong
	this.guess = function(item){
		var count = 0;
		print = [];
		this.words.forEach(function(element){
			var num = element.check(item);
			if(num == true){
				count++;
			}
			print.push(element.underlying());
		});
		if(count == 0){
			this.chance--;
			console.log("incorrect!!!\n");
			console.log(this.chance+" guesses remaining!!!");
		}
		else{
			console.log("correct!!!");
		}
	}
}
module.exports = {
	Word:Word
}
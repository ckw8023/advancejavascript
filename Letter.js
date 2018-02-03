function Letter(val){
	this.val = val;
	this.guessed = false;
	this.underlying = function(){
		if(this.guessed == false){
			return '_';
		}
		else{
			return this.val;
		}
	}
	this.check = function(item){
		if(this.val === item){
			this.guessed = true;
			return true;
		}
		return false;
	}
}

module.exports = {
	Letter:Letter
}